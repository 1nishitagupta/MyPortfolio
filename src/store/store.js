import { configureStore } from "@reduxjs/toolkit";
import feedReducer from './feedbackSlice'

const store = configureStore({
    reducer : {
        feedback : feedReducer,
    }
})

export default store