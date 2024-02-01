import { configureStore } from "@reduxjs/toolkit";
import liveChatSlice from "./Components/Slice/liveChatSlice"

const store = configureStore({
    reducer: {
        chat: liveChatSlice,
    }
})

export default store;