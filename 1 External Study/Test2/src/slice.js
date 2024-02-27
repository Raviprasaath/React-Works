import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        task: [],
    },
    reducers: {
        taskAdd: (state, action) => {
            state.task.push(action.payload);
        }
    },
})

export const { taskAdd } = todoSlice.actions; 
export default todoSlice.reducer;