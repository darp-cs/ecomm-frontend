import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth.reducer'
import profileReducer from './reducers/profile.reducer'
export const store =  configureStore({
  reducer: {
    auth: authReducer,
    profile:profileReducer
  }
})

