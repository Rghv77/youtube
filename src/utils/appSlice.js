import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true, 
        ButtonName:"",       
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        toggleButton:(state,action)=>{
            if(state.ButtonName===action.payload) state.ButtonName="";
            else state.ButtonName=action.payload;
            
        }
    },
});

export const {toggleMenu,closeMenu,toggleButton} = appSlice.actions;
export default appSlice.reducer;