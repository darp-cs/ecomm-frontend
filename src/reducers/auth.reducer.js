import * as actions from '../actions/auth.actions';
import { createSlice } from '@reduxjs/toolkit';


const authReducer = createSlice({
    name: "auth",
    initialState: {
            authToken: null,
            permissions:[]
        },
    reducers: {
      setAuthToken: (state, action) => {
        state.authToken = action.payload;
      },
    },
  });
  
  export const { setAuthToken } = authReducer.actions

  export const authToken = (state) => state.authReducer.authToken

  export const permissions = (state) => state.authReducer.permissions

  export default authReducer.reducer;