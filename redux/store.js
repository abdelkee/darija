import { configureStore } from '@reduxjs/toolkit'
import vocabReducer from './reducers/vocabReducer'

export const store = configureStore({
  reducer: {
    vocabSlice: vocabReducer
  },
})
