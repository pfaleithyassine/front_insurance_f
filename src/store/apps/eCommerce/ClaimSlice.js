import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



export const getAllClaim  = createAsyncThunk("getAllClaim",async (_,{ rejectWithValue})=>{
      const response = await axios.get("http://localhost:5000/claims/all-claims")
      .catch((err)=>{
          console.log(err.response.data.message)
         throw rejectWithValue(err.response.data.message)
      })
      return response.data
  })
  export const updatestatus = createAsyncThunk("updatestatus", async (body, { rejectWithValue }) => {
    const { id, status } = body; // Destructure id and status from the body
    try {
        const response = await axios.patch(`http://localhost:5000/claims/update-state/${id}`, { status });
        return response.data;
    } catch (error) {
        console.error("Error updating status:", error);
        throw rejectWithValue(error.response.data.message);
    }
});

  

  
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
       allClaims: [],
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

        state.claim = action.payload;
       });
       builder.addCase(saveClaim.rejected, (state, action) => {
        state.message = action.payload;
       });
       builder.addCase(getAllClaim.fulfilled, (state, action) => {
        state.allClaims = action.payload;
       });
       builder.addCase(getAllClaim.rejected, (state, action) => {
        console.log(action.error.message)
        state.message = action.error.message;
       });
       builder.addCase(updatestatus.fulfilled, (state, action) => {
        state.message = action.payload;
       });
       builder.addCase(updatestatus.rejected, (state, action) => {
        console.log(action.error.message)
        state.message = action.payload;
       })


     
    }
})

export default ClaimSlice.reducer