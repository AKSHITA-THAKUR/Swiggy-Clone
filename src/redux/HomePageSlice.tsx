import { createSlice, createAsyncThunk,  PayloadAction } from "@reduxjs/toolkit";
import {fetchDishes} from "./api"

export interface DishState {
    data: any[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialDishState: DishState = {
    data: [],
    status: "idle",
    error: null,
};

type FetchDishesResponse = any[];

 export const dishesData: any = createAsyncThunk<FetchDishesResponse, void>("fetchDishes" , async ()=>{
 const dishes = await fetchDishes()
 return dishes;
 })

const homePageSlice = createSlice({
    name: 'homepage',
    initialState: initialDishState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(dishesData.pending, (state) => {  
            state.status = "loading";
            state.error = null;
        })
        .addCase(dishesData.fulfilled, (state, action: PayloadAction<FetchDishesResponse>) => {   
            
            state.status = "succeeded";
            state.data = action.payload;
            
        })
        .addCase(dishesData.rejected, (state, action) => {  
            state.status = "failed";
            state.error = action.error.message || "Failed to fetch dishes";
        });
}
});

export const dishReducer = homePageSlice.reducer;
