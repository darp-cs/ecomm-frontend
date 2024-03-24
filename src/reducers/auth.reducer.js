import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth:false,
    authToken: null,
    refreshToken: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    //Reducers = actions
    reducers:{
        setIsAuth: (state, action)=>{
            state.isAuth = action.payload;
        },
        setAuthToken: (state, action)=>{
            state.authToken = action.payload;
        },
        setRefreshToken: (state, action)=>{
            state.refreshToken = action.payload;
        },
        setAuth:(state,action)=>{
            state = action.payload;
        }
    }
});


export const {setIsAuth, setAuthToken, setAuth, setRefreshToken} = authSlice.actions;

export default authSlice.reducer;