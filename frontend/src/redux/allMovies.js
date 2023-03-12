import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    remove: false,
    likes: 0,
    dislikes: 0
}
const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setRemove: (state, action) => {state.remove = action.payload},
        setLike: (state, action) => {state.like = action.payload},
        setDisLike: (state, action) => {state.dislikes = action.payload}
    }
});

export const {setId, setTitle, setCategory, setLike, setDisLike} = moviesSlice.actions;
export default moviesSlice;