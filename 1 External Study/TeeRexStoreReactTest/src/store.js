import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './Slice/itemsSlice'

export const Store = configureStore({
    reducer: {
        items: itemsSlice
    }
})