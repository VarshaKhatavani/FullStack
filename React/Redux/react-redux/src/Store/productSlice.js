import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES={
    SUCCESS:"success",
    ERROR:"error",
    LOADING:"loading"
}

const productSlice = createSlice({
    name:"product",
    initialState :{
        data:[],
        status:STATUSES.SUCCESS
    },
    // reducers:{
    //     setProducts(state,action){
    //         state.data = action.payload;
    //     },
    //     setStatus(state, action){
    //         state.status = action.payload;
    //     }
    // }

    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.status = STATUSES.SUCCESS
        }).addCase(fetchProducts.fulfilled,(state,actions)=>{
            state.status = STATUSES.SUCCESS;
            state.data = actions.payload
        }).addCase(fetchProducts.rejected,(state)=>{
            state.status = STATUSES.ERROR
        })
    }
})

export const {setProducts,setStatus} = productSlice.actions;

export default productSlice.reducer;

// export function fetchProducts(){
//     return async function(dispatch){
//         dispatch(setStatus("loading"));
//         try{
//             const res = await axios.get("https://fakestoreapi.com/products");
//             dispatch(setProducts(res.data));
//             dispatch(setStatus("success"));            
//         }
//         catch(error){
//             dispatch(setStatus("error"));
//         }
//     }
// }

export const fetchProducts = createAsyncThunk("product", async()=>{
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
})