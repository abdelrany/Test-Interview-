import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "../features/partners/partners-api-slice"

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	//Applying middleware to get external dta through an API (thunk)
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(apiSlice.middleware)
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
