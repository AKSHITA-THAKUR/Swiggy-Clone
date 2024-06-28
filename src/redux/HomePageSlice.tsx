import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchDishes , RestDetail } from "./api";

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

export interface Menu {
	MenuList: any[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

const initialMenuState : Menu = {
	MenuList: [],
	status: "idle",
	error: null,
}

type FetchDishesResponse = any[];

export const dishesData: any = createAsyncThunk<FetchDishesResponse, void>(
	"fetchDishes",
	async () => {
		const dishes = await fetchDishes();
		return dishes;
	}
);

export const restrauntData : any = createAsyncThunk("fetchDetails" , 
	async (id:number)=>{
	      const details = await  RestDetail(id);
		  return details;

})


const homePageSlice = createSlice({
	name: "homepage",
	initialState: initialDishState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(dishesData.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(
				dishesData.fulfilled,
				(state, action: PayloadAction<FetchDishesResponse>) => {
					state.status = "succeeded";
					state.data = action.payload;
				}
			)
			.addCase(dishesData.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message || "Failed to fetch dishes";
			});

	},
});

const MenuSlice = createSlice({
	name:"menu" , 
	initialState:initialMenuState,
	reducers:{} , 
	extraReducers: (builder) => {
		builder
            .addCase(restrauntData.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(
                restrauntData.fulfilled,
                (state, action) => {
                    state.status = "succeeded";
                    state.MenuList = action.payload;
                }
            )
            .addCase(restrauntData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Failed to fetch details";
            });
	}

})



export const menuReducer = MenuSlice.reducer;
export const dishReducer = homePageSlice.reducer;
