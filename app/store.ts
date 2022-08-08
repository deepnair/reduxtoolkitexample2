import {configureStore} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import reservationReducer from '../features/reservationSlice'
import customerReducer from '../features/customerSlice'

export const store = configureStore({
    reducer: {
        reservations: reservationReducer,
        customersFood: customerReducer
    }
})

export const makeStore = () => store

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper<AppStore>(makeStore)
