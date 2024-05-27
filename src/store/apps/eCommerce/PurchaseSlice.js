import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../../utils/axios';



export const makePurchase = createAsyncThunk("makePurchase", async (body) => {
    console.log(body)
    const response = await axios.post("http://localhost:5000/purchases/buy", body)
    .catch((err) => {
        console.log(err)
        return err.response;
        });
    
    return response.data;
  });

export const getPurchaseByIdUser = createAsyncThunk("getPurchaseByIdUser", async (userId) => {
    const response = await axios.get(`http://localhost:5000/purchases/getbyuser/${userId}`)
    .catch((err) => {
        console.log(err)
        return err.response;
        });
    
    return response.data;
  });

export const PurchaseSlice = createSlice({
    name: "purchase",
    initialState:{
       purchases: [],
       purchase:null
    },
    reducers:{
    resetMessage: (state) => {
        state.message = null;
    }
    },
    extraReducers (builder)
    {
         builder.addCase(makePurchase.fulfilled, (state, action) => {
          console.log("hahahaah")
          state.purchase = action.payload;
         });
         builder.addCase(makePurchase.rejected, (state, action) => {
          console.log(action.payload)
          state.error = action.payload;
         });
         builder.addCase(getPurchaseByIdUser.fulfilled, (state, action) => {
          state.purchases = action.payload;
         });
     
    }
})

export default PurchaseSlice.reducer