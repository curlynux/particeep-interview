import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    remove: false,
    newCategory: "",
    movies: [],
    localMovie: [],
    page: 1,
    elementsPerPage: 4,
    like: 0,
    dislike: 0,
}
const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setRemove: (state, action) => {state.remove = action.payload},
        setNewCategory: (state, action) => {state.category = action.payload},
        setMovies: (state, action) => {state.movies =action.payload},
        setLocalMovie: (state, action) => {state.localMovie = action.payload},
        setPage: (state, action) => {state.page = action.payload},
        setElementsPerPage: (state, action) => {state.elementsPerPage = action.payload},
        setLike: (state, action) => {state.like = action.payload},
        setDisLike: (state, action) => {state.dislike = action.payload}
    }
});

export const {setRemove, setNewCategory, setElementsPerPage, setMovies, setLocalMovie, setPage, setLike, setDisLike} = moviesSlice.actions;
export default moviesSlice;