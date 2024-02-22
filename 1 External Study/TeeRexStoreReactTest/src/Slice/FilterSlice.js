import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name: 'filterSlice',
    initialState: {
        filtered: [],
    },
    reducers: {
        getFilteredProducts: (state, action)=> {
            state.filtered = action.payload;
        }
    }
})

export const { getFilteredProducts } = filterSlice.actions;
export default filterSlice.reducer;