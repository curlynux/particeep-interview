import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    remove: false,
    like: 0,
    dislike: 0,
}
const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setRemove: (state, action) => {state.remove = action.payload},
        setLike: (state, action) => {state.like = action.payload},
        setDisLike: (state, action) => {state.dislike = action.payload}
    }
});

export const {setLike, setDisLike} = moviesSlice.actions;
export default moviesSlice;