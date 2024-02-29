import { createSlice } from "@reduxjs/toolkit";

//thunk

const taskSlice = createSlice({
    name: "todoApp",
    initialState: {
        tasks: [],
        task2: [],
    },
    reducers: {
        getTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        addTask: (state, action) => {
            state.task2.push(action.payload);
        }
    }
})

export const { getTask, addTask } = taskSlice.actions;
export default taskSlice.reducer;