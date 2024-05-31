import { createSlice } from "@reduxjs/toolkit"

const liveChatSlice = createSlice({
    name: 'chat',
    initialState: {
        message: [],
    },
    reducers: {
        addMessages: (state, action) => {
            state.message.splice(5, 1);
            state.message.unshift(action.payload);
        }
    }
})

export const { addMessages } = liveChatSlice.actions;
export default liveChatSlice.reducer;