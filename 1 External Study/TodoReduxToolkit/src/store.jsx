import { configureStore } from '@reduxjs/toolkit'
import taskReducerDummy from './slices/taskSlices';

const store = configureStore({
    reducer: {
        taskStore: taskReducerDummy,
    }
})

export default store;