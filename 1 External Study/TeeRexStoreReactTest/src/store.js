import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './Slice/ItemsSlice'
import filterSlice from './Slice/FilterSlice'

export const Store = configureStore({
    reducer: {
        items: itemsSlice,
        filterProducts: filterSlice,
    }
})