import { createSlice } from "@reduxjs/toolkit";


export const globalSlice = createSlice({
    name: 'globalSlice',
    initialState: {
        appBarHeading: 'Vocabulario',
        isSearchBarOpen: false,
        isEditMode: false,
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
        }
    }
})

export const { setAppBarHeading, setSearchBarOpen, setIsEditMode } = globalSlice.actions
export default globalSlice.reducer