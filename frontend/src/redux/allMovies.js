import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    remove: false,
    category: "",
    like: 0,
    dislike: 0,
}
const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setRemove: (state, action) => {state.remove = action.payload},
        setCategory: (state, action) => {state.category = action.payload},
        setLike: (state, action) => {state.like = action.payload},
        setDisLike: (state, action) => {state.dislike = action.payload}
    }
});

export const {setRemove, setCategory, setLike, setDisLike} = moviesSlice.actions;
export default moviesSlice;