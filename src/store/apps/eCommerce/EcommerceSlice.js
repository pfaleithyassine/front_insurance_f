import axios from '../../../utils/axios';
import { filter, map } from 'lodash';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = '/api/data/eCommerce/ProductsData';
//const API_URL_PRODUCT = "http://localhost:5000/products/all"

export const getAllProducts = createAsyncThunk("getProducts",async (args,{ rejectWithValue})=>{
  const response = await axios.get("http://localhost:5000/products/all")
  .catch((err)=>{
     throw rejectWithValue(err.response.data.message)
  })
  return response.data
})


export const getProductById = createAsyncThunk("getProductById",async (id,{ rejectWithValue})=>{
  const response = await axios.get(`http://localhost:5000/products/getproduct/${id}`)
  .catch((err)=>{
     throw rejectWithValue(err.response.data.message)
  })
  return response.data
})

const initialState = {
  products: [],
  contracts: null,
  product:null,
  productSearch: '',
  sortBy: 'newest',
  cart: [],
  total: 0,
  filters: {
    category: 'All',
    color: 'All',
    gender: 'All',
    price: 'All',
    rating: '',
  },
  error: ''
};

export const EcommerceSlice = createSlice({
  name: 'ecommerce',
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },
    // GET PRODUCTS
   
    SearchProduct: (state, action) => {
      state.productSearch = action.payload;
    },
    setVisibilityFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
    //  SORT  PRODUCTS
    sortByProducts(state, action) {
      state.sortBy = action.payload;
    },
    //  SORT  PRODUCTS
    sortByGender(state, action) {
      state.filters.gender = action.payload.gender;
    },
    //  SORT  By Color
    sortByColor(state, action) {
      state.filters.color = action.payload.color;
    },
    //  SORT  By Color
    sortByPrice(state, action) {
      state.filters.price = action.payload.price;
    },
    //  FILTER PRODUCTS
    filterProducts(state, action) {
      state.filters.category = action.payload.category;
    },
    //  FILTER Reset
    filterReset(state) {
      state.filters.category = 'All';
      state.filters.color = 'All';
      state.filters.gender = 'All';
      state.filters.price = 'All';
      state.sortBy = 'newest';
    },
    // ADD TO CART
    addToCart(state, action) {
      const product = action.payload;
      state.cart = [...state.cart, product];
    },
    // qty increment
    increment(state, action) {
      const productId = action.payload;
      const updateCart = map(state.cart, (product) => {
        if (product.id === productId) {
          return {
            ...product,
            qty: product.qty + 1,
          };
        }
        return product;
      });

      state.cart = updateCart;
    },
    // qty decrement
    decrement(state, action) {
      const productId = action.payload;
      const updateCart = map(state.cart, (product) => {
        if (product.id === productId) {
          return {
            ...product,
            qty: product.qty - 1,
          };
        }
        return product;
      });

      state.cart = updateCart;
    },
    // delete Cart
    deleteCart(state, action) {
      const updateCart = filter(state.cart, (item) => item.id !== action.payload);
      state.cart = updateCart;
    },
  },
  extraReducers(builder){
    builder.addCase(getAllProducts.fulfilled,(state,action)=>{
      state.products = action.payload
  })
  builder.addCase(getProductById.fulfilled , (state,action)=>{
    state.product = action.payload
  },

)}

});
export const {
  hasError,
  SearchProduct,
  setVisibilityFilter,
  sortByProducts,
  filterProducts,
  sortByGender,
  increment,
  deleteCart,
  decrement,
  addToCart,
  sortByPrice,
  filterReset,
  sortByColor,
} = EcommerceSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}`);
    //dispatch(getProducts(response.data));
  } catch (error) {
    dispatch(hasError(error));
  }
};

export default EcommerceSlice.reducer;
