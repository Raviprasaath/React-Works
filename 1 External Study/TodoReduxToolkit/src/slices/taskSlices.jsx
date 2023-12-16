import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTasks: [],
    singleTask: {},
}

const taskSlices = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask:(state, action) => {
            let id = Math.floor(Math.random() * 100);
            let combine = {...action.payload, id}
            state.allTasks.push(combine);
        },
        removeTask:(state, action) => {
            state.allTasks = state.allTasks.filter((item)=>item.id !== action.payload.id);
        },
        updateTask:(state, action) => {
            state.allTasks = state.allTasks.map((item)=>(item.id === action.payload.id ? action.payload : item))
        },
        getSingleTask:(state, action) => {
            state.singleTask = action.payload;
        }
    }
})
export const {addTask, removeTask, updateTask, getSingleTask} = taskSlices.actions;
export default taskSlices.reducer;