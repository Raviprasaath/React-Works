import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    totalTasks : [],
    singleTask: {},
    isLoading: false,
    error: ''
}

export const getTaskFromServer = createAsyncThunk(
    "tasks/getTaskFromServer",
    async (_, {rejectWithValue}) => {
        const response = await fetch(' http://localhost:8080/tasks');
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            return rejectWithValue({error: 'No Task Found'})
        }
    }
)


const taskSlice = createSlice({
    name: 'taskReducerSlice',
    initialState,
    reducers: {
        taskAdding: (state, action) => {
            let id = Math.floor(Math.random() * 100);
            let join = {...action.payload, id};
            state.totalTasks.push(join);
        },
        taskRemoving: (state, action) => {
            state.totalTasks = state.totalTasks.filter((item)=>item.id !== action.payload.id);
        },
        taskUpdating: (state, action) => {
            state.totalTasks = state.totalTasks.map((item)=>item.id === action.payload.id ? action.payload : item);
        }
    },
    extraReducers:(builder) => {
        builder
        .addCase(getTaskFromServer.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getTaskFromServer.fulfilled, (state, action)=> {
            state.isLoading = false,
            state.error = '',
            state.totalTasks = action.payload
        })
        .addCase(getTaskFromServer.rejected, (state, action)=> {
            state.isLoading = false,
            state.error = action.payload.error,
            state.totalTasks = []
        })
    }
})

export const { taskAdding, taskRemoving, taskUpdating } = taskSlice.actions;
export default taskSlice.reducer;