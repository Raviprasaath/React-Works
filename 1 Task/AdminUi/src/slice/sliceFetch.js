import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../constants'


export const fetching = createAsyncThunk('fetchPosts', async()=>{
    const response = await fetch(BASE_URL);
    const result = await response.json();
    return result;
})

const sliceFetch = createSlice({
    name: 'sliceFetch',
    initialState: {
        fetchedValues: [],
        fetchingLoading: false,
        fetchingError: "",
        pageLength: 1,
        currentPage: 1,
        deleteSelected: false,
        deleteSelectAll: false,
    },
    reducers: {
        getPageLength: (state, action) => {
            state.pageLength = action.payload;
        },
        getCurrentPageValue: (state, action) => {
            state.currentPage = action.payload;
        },
        getDeleteSelected: (state) => {
            state.deleteSelected = !state.deleteSelected;
        },
        getDeleteSelectedAll: (state) => {
            state.deleteSelectAll = !state.deleteSelectAll;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetching.pending, (state) => {
            state.fetchingLoading = true
        })
        .addCase(fetching.fulfilled, (state, action) => {
            state.fetchingLoading = false,
            state.fetchedValues = action.payload,
            state.fetchingError = ""
        })
        .addCase(fetching.rejected, (state, action)=> {
            state.fetchingLoading = false,
            state.fetchedValues = [],
            state.fetchingError = action.payload.error    
        })
    }
})

export const { getPageLength, getCurrentPageValue, getDeleteSelected, getDeleteSelectedAll } = sliceFetch.actions;
export default sliceFetch.reducer;