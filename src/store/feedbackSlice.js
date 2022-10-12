import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name : "feedback",
    initialState : [],
    reducers : {
        add(state,action){
            state.push(action.payload);
        }
    }
})

export const {add} = feedSlice.actions;
export default feedSlice.reducer;