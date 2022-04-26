import { createSlice } from "@reduxjs/toolkit";


export const globalSlice = createSlice({
    name: 'globalSlice',
    initialState: {
        appBarHeading: 'Vocabulario',
        isSearchBarOpen: false,
        isEditMode: false,
        selectedCategory: null,
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
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    }
})

export const { setAppBarHeading, setSearchBarOpen, setIsEditMode, setSelectedCategory } = globalSlice.actions
export default globalSlice.reducer