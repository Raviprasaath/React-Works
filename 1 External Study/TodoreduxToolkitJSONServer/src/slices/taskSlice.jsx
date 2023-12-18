import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalTasks : [],
    singleTask: {},
    isLoading: false, 
    error: ''
}

const BASE_URL = 'http://localhost:8080/tasks'

export const getTaskFetch = createAsyncThunk(
    'tasks/getTaskFetch', 
    async (_, {rejectWithValue})=>{
        const response = await fetch(BASE_URL);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            return rejectWithValue({error:'Task Fetching Got Failed'});
        }
    }
)
// adding to server
export const postTaskFetch = createAsyncThunk(
    'tasks/postTaskFetch', 
    async (values, {rejectWithValue})=>{
        const option = {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-type': "application/json; character= UTF-8"
            }
        }
        const response = await fetch(BASE_URL, option);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            return rejectWithValue({error:'Task Adding Failed'});
        }
    }
)
// delete from server
export const deleteTaskFetch = createAsyncThunk(
    'tasks/deleteTaskFetch', 
    async (value, {rejectWithValue})=>{
        const option = {
            method: 'DELETE',
            body: JSON.stringify(value),
            headers: {
                'content-type': "application/json; character = utf-8"
            }
        }
        const response = await fetch(BASE_URL+'/'+value.id, option);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            return rejectWithValue({error:'Task Deleting Failed'});
        }
    }
)
// Update in server
export const updateTaskFetch = createAsyncThunk(
    'tasks/updateTaskFetch', 
    async (value, {rejectWithValue})=>{
        const option = {
            method: 'PATCH',
            body: JSON.stringify(value),
            headers: {
                'content-type': "application/json; character = utf-8"
            }
        }
        const response = await fetch(BASE_URL+'/'+value.id, option);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            return rejectWithValue({error:'Task Updating Failed'});
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
    extraReducers: (builder) => {
        builder
        .addCase(getTaskFetch.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getTaskFetch.fulfilled, (state, action)=> {
            state.isLoading = false
            state.totalTasks = action.payload
            state.error = ''
        })
        .addCase(getTaskFetch.rejected, (state, action)=> {
            state.isLoading = false
            state.error = action.payload.error
        })

        .addCase(postTaskFetch.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(postTaskFetch.fulfilled, (state, action)=> {
            state.isLoading = false
            state.totalTasks.push(action.payload)
            state.error = ''
        })
        .addCase(postTaskFetch.rejected, (state, action)=> {
            state.isLoading = false
            state.error = action.payload.error
        })

        .addCase(deleteTaskFetch.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(deleteTaskFetch.fulfilled, (state, action)=> {
            state.isLoading = false,
            state.totalTasks = state.totalTasks.filter((item)=>item.id !== action.payload.id),
            state.error = ''
        })
        .addCase(deleteTaskFetch.rejected, (state, action)=> {
            state.isLoading = false,
            state.error = action.payload.error
        })
        
        .addCase(updateTaskFetch.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(updateTaskFetch.fulfilled, (state, action)=> {
            state.isLoading = false,
            state.totalTasks = state.totalTasks.map((item)=>item.id === action.payload.id ? action.payload:item),
            state.error = ''
        })
        .addCase(updateTaskFetch.rejected, (state, action)=> {
            state.isLoading = false,
            state.error = action.payload.error
        })
        
    }
})

export const { taskAdding, taskRemoving, taskUpdating } = taskSlice.actions;
export default taskSlice.reducer;