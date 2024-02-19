import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true, 
        ButtonName:"All",    
        Theme:true, //true means light   
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        toggleButton:(state,action)=>{
             state.ButtonName=action.payload;            
        },
        toggleTheme:(state)=>{
            state.Theme=!state.Theme;
        }
    },
});

export const {toggleMenu,closeMenu,toggleButton,toggleTheme} = appSlice.actions;
export default appSlice.reducer;