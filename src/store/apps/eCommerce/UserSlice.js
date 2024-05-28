import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



export const getAllUsers  = createAsyncThunk("getAllUsers",async (_,{ rejectWithValue})=>{
      const response = await axios.get("http://localhost:5000/user/all-users")
      .catch((err)=>{
          console.log(err.response.data.message)
         throw rejectWithValue(err.response.data.message)
      })
      return response.data
  })

  export const getContractDetailsPerUser  = createAsyncThunk("getContractDetailsPerUser",async (id,{ rejectWithValue})=>{
    const response = await axios.get("http://localhost:5000/purchases/getcontracts/"+id)
    .catch((err)=>{
        console.log(err.response.data.message)
       throw rejectWithValue(err.response.data.message)
    })
    return response.data
})

export const UserSlice = createSlice({
    name: "users",
    initialState:{
       allUsers: [],
       contractDetails: [],
       user:null
    },
    reducers:{
    resetMessage: (state) => {
        state.message = null;
    }
    },
    extraReducers (builder)
    {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
        state.allUsers = action.payload;
        });
        builder.addCase(getAllUsers.rejected, (state, action) => {
        state.message = action.payload;
        });
        builder.addCase(getContractDetailsPerUser.fulfilled, (state, action) => {
            state.contractDetails = action.payload;
        });
        builder.addCase(getContractDetailsPerUser.rejected, (state, action) => {
            state.message = action.payload;
        });
     
    }
})

export default UserSlice.reducer