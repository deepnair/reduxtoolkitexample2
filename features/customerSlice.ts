import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Customer{
    name: string,
    reservationId: string,
    food: string[]
}

interface CustomerSliceStateType{
    value: Customer[]
}

const initialState: CustomerSliceStateType = {
    value: []
}

interface AddFoodItemType{
    id: string,
    foodItem: string
}

const customerSlice = createSlice({
    name: 'customersFood',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
        },
        addFoodItem: (state, action: PayloadAction<AddFoodItemType>) => {
            state.value.filter((customer) => customer.reservationId === action.payload.id)[0].food.push(action.payload.foodItem)
        },
        removeFoodItem: (state, action: PayloadAction<AddFoodItemType>) => {
            state.value.filter((customer) => customer.reservationId === action.payload.id)[0].food.splice(state.value.filter((customer) => customer.reservationId === action.payload.id)[0].food.indexOf(action.payload.foodItem), 1)
        }
    }
})

export const {addCustomer, addFoodItem, removeFoodItem} = customerSlice.actions

export default customerSlice.reducer