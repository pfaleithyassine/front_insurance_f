import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../../utils/axios';



export const getAllContracts  = createAsyncThunk("getAllContracts",async (_,{ rejectWithValue})=>{
  
    const response = await axios.get("http://localhost:5000/contract/getall")
    .catch((err)=>{
        console.log(err.response.data.message)
       throw rejectWithValue(err.response.data.message)
    })
    return response.data
  })

export const ContractSlice = createSlice({
    name: "contract",
    initialState:{
       contracts: [],
       contract:null
    },
    reducers:{
    resetMessage: (state) => {
        state.message = null;
    }
    },
    extraReducers (builder)
    {
       builder.addCase(getAllContracts.fulfilled, (state, action) => {
        console.log("hahahaah")
        state.contracts = action.payload;
       });
       builder.addCase(getAllContracts.rejected, (state, action) => {
        console.log(action.payload)
        state.error = action.payload;
       });
     
    }
})

export default ContractSlice.reducer