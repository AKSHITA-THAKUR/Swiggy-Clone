import { configureStore } from "@reduxjs/toolkit";
import { dishReducer  , menuReducer} from "./HomePageSlice";


const store = configureStore({
    reducer:{
       homepage : dishReducer  ,
       menu: menuReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store