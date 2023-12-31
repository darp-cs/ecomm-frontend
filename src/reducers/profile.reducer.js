import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"Diego",
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    //Reducers = actions
    reducers:{
        setName: (state,action)=>{
            state.name = action.payload;
        },
    }
});


export const {setName} = profileSlice.actions;

export default profileSlice.reducer;