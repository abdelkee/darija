import { createSlice } from "@reduxjs/toolkit";


export const globalSlice = createSlice({
    name: 'globalSlice',
    initialState: {
        appBarHeading: 'Vocabulario',
        isSearchBarOpen: false,
        isChanged: false,
    },
    reducers: {
        setAppBarHeading: (state, action) => {
            state.appBarHeading = action.payload
        },
        setSearchBarOpen: (state, action) => {
            state.isSearchBarOpen = action.payload
        },
        setIsChanged: (state) => {
            state.isChanged = !state.isChanged
        }
    }
})

export const { setAppBarHeading, setSearchBarOpen, setIsChanged } = globalSlice.actions
export default globalSlice.reducer