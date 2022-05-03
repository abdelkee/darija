import { createSlice } from "@reduxjs/toolkit";


export const globalSlice = createSlice({
    name: 'globalSlice',
    initialState: {
        appBarHeading: 'Vocabulario',
        isSearchBarOpen: false,
        isEditMode: false,
        itemToMutate: null,
        keywordSearched: '',
    },
    reducers: {
        setAppBarHeading: (state, action) => {
            state.appBarHeading = action.payload
        },
        setSearchBarOpen: (state, action) => {
            state.isSearchBarOpen = action.payload
        },
        setIsEditMode: (state) => {
            state.isEditMode = !state.isEditMode
        },
        setItemToMutate: (state, action) => {
            state.itemToMutate = action.payload
        },
        setKeywordSearched: (state, action) => {
            state.keywordSearched = action.payload
        }
    }
})

export const { 
    setAppBarHeading, 
    setSearchBarOpen, 
    setIsEditMode, 
    setItemToMutate,
    setKeywordSearched } = globalSlice.actions
export default globalSlice.reducer