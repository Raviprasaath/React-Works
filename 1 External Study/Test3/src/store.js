import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./slice";

const store = configureStore({
    reducer: {
        todo : taskSlice,
    }
})

export default store;