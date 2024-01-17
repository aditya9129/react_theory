import { createSlice,current } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
      additems:(state,action)=>{
        state.items.push(action.payload);
      },
      removeitem:(state)=>{
        state.items.pop;
      },
      clearitems:(state)=>{
        state.items.length=0;
      },

    },
});
export const {additems,removeitem,clearitems}=cartSlice.actions;
export default cartSlice.reducer;