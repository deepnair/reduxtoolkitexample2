import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationStateType{
    value: string[]
}

const initialState: ReservationStateType = {
    value: []
}

const reservationSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const {add: addReservation, remove: removeReservation} = reservationSlice.actions
export default reservationSlice.reducer