import { configureStore } from "@reduxjs/toolkit";
import { dishReducer } from "./HomePageSlice";


const store = configureStore({
    reducer:{
       homepage : dishReducer 
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store