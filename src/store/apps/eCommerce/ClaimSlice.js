import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



export const getAllClaim  = createAsyncThunk("getAllClaim",async (_,{ rejectWithValue})=>{
  
  })

  
export const saveClaim  = createAsyncThunk("saveClaim",async (body,{ rejectWithValue})=>{
    const response = await axios.post("http://localhost:5000/claims/save-claim",body,{
        headers: {
            'Content-Type': 'multipart/form-data',
          },
    })
    .catch((err)=>{
        console.log(err.response.data.message)
       throw rejectWithValue(err.response.data.message)
    })
    return response.data
})

export const ClaimSlice = createSlice({
    name: "claims",
    initialState:{
       claims: [],
       claim:null
    },
    reducers:{
    resetMessage: (state) => {
        state.message = null;
    }
    },
    extraReducers (builder)
    {
      builder.addCase(saveClaim.fulfilled, (state, action) => {
        console.log("hahahaah")
        state.claim = action.payload;
       });
       builder.addCase(saveClaim.rejected, (state, action) => {
        console.log(action.payload)
        state.message = action.payload;
       });
     
    }
})

export default ClaimSlice.reducer