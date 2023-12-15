import { createSlice } from "@reduxjs/toolkit";

export const initailState = {
    loading: false,
    hasError: false,
    post: {},
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPost: state => {
            state.loading = true
        },
        getPostSuccess: (state, { payload }) => {
            state.post = payload
            state.loading = false
            state.hasError = false
        },
        getPostFailure: state => {
            state.loading = false
            state.hasError = true
        }
    }
})

export const {getPost, getPostSuccess, getPostFailure} = postSlice.actions
export const postSelector = state => state.post
export default postSlice.reducer

