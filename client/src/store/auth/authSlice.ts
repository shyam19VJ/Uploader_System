import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    isLoggedIn:boolean,
    user:null| {id:string , name:string}
    
};

const initialState : AuthState= {
    isLoggedIn:false,
    user:null
};

const authslice = createSlice({
name:'auth',
initialState,
reducers:{
    loginsuccess:(state,action:PayloadAction<{id:string,name:string}>)=>{
      state.isLoggedIn =true,
      state.user =action.payload
    },
    logout:(state)=>{
        state.isLoggedIn =false,
        state.user =null


    }
}

})
export const {loginsuccess,logout} = authslice.actions;
export default authslice.reducer;