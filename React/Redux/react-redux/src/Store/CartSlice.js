// creating a slice 

// a "slice" is a concept used to organize and manage a specific portion 
// of the application's state and the associated actions and reducers.

import { createSlice } from "@reduxjs/toolkit";

const cartSlice =  createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state, action){
            return [...state, action.payload] 
            // action.payload : item you want to add to the cart
        },
        remove(state, action){
            return state.filter((item)=>item.id !== action.payload);
        }
    }
})

export const {add,remove} = cartSlice.actions;

export default cartSlice.reducer;
