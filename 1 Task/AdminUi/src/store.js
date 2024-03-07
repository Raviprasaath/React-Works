import { configureStore } from '@reduxjs/toolkit'
import sliceFetch from "./slice/sliceFetch";

const store = configureStore({
    reducer: {
        fetchedData: sliceFetch, 
    }
})

export default store;