# Redux Toolkit Example 2

This is an example of a site that uses redux toolkit for state management. It is based off a tutorial called [React With Redux Toolkit](https://www.youtube.com/watch?v=jR4fagDcvrc) by [Laith Academy](https://www.youtube.com/channel/UCyLNhHSiEVkVwPSFKxJAfSA) on Youtube.

## Steps

### Basic html & styling of the site

Objective:

Create a home page that has the restaurant's name at the top. Below the title at the left side should be the reservations, with an option to add further reservations. To the middle and right of the page must be the actual customers who have shown up at the restaurant. Each customer's food should be shown on their card along with an option to remove each item right next to the item. There should also be an option to add more food items to a customer. 

1. A dark, grey-based color scheme is decided on, which will go well with the use of shadows for the reservation and customer cards. It will use colors like darkslategrey, and gainsboro.
1. To make the title at the top, we add the following html tags and the class restaurantTitle which we get from styles which is imported from Home.module.css:
    ```jsx
    <div className={styles.restaurantTitle}>
        <h1>Redux toolkit restaurant</h1>
      </div>
    ```
    We want to make it 80% of the width, in the center, and have a little bit of space above and below. We also want the text centered rather than left aligned at the center, so style it as follows:
    ```css
    .restaurantTitle{
        width:80%;
        margin: 20px auto;
        text-align: center;
        color: darkslategray
    }
    ```
1. Next we create the container that will contain the remaining content. This will be the container that divides the contents into the reservations and customer food sections. The html for it will look as follows:
    ```jsx
    <div className={styles.contentContainer}>
    </div>
    ```
    We want 1/4th of the content area to be reservations on the left and 3/4ths of the content area to be the customer food and at the same time we want to be able to see the whole thing on the screen, so we define a specific height for it in terms of vh. Therefore the styling of the container will be as follows:
    ```css
    .contentContainer{
        width: 80%;
        height: 80vh;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 3fr;
    }
    ```
1. Now we create the reservations container within the previous div. This will contain two further divs. One that contains the reservation cards themselves, and another container that contains the input tag and button to add further reservations. The html for all of the above will look as follows:
    ```jsx
    <div className={styles.reservationsContainer}>
          <div className={styles.reservationCardsContainer}>
          </div>
          <div className={styles.addCustomerFields}>
          </div>
    </div>
    ```
    We want a nice border separating the reservations section from the customer food section, but we don't want to be too thick, so we pick a darkslategrey, dotted line that's 1 pixel wide. We also want the two child containers to take up all the space and divide the space between so we can give it the following styling:
    ```css
    .reservationsContainer{
        border-right: darkslategrey 1px dotted;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    ```
1. We want the container of the reservation cards to scroll if there are more reservations than are visible right away, and we want it to occupy most of the screenspace so we use the following styling:
    ```css
    .reservationCardsContainer{
        overflow-y: auto;
        height: 55vh;
    }
    ```
1. Then we shall style the reservation cards which will contain the name and a hand icon pointing to the right which we want to be green (we will use the seagreen color in keeping with the color schema). The jsx will look as follows:
    ```jsx
    <div className={styles.reservationCard}>
        <p>John Doe</p>
        <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
    </div>
    ```
    The FaHandPointRight is imported from 'react-icons/fa' which is how you use Font Awesome icons in react.
1. We want the reservation card to have a nice shadow and we want the text on the left side and the arrow pointing right on the right side of each card, but at the same time we want there to be some padding in the card. We want to have some space above and below each card. We also want the user to know that it is clickable, so we use the following styling:
    ```css
    .reservationCard{
        box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.171);
        border-radius: 5px;
        padding: 10px 20px;
        margin: 0px 20px 20px 0px;
        display: flex;
        justify-content: space-between;
    }

    .reservationCard:hover{
        cursor: pointer;
    }
    ```
1. Now we design the button to add a reservation area. It will contain a title, a text input, and a button to add the name. The jsx will look as follows:
    ```jsx
    <div className={styles.addCustomerFields}>
        <p className={styles.addCustomerTitle}>Add Customer</p>
        <input className={styles.addCustomerNameInput} type='text' placeholder='Customer Name'/>
        <button className={styles.addCustomerButton}>Add</button>
    </div>
    ```
1. We want to give it a light grey background, darker text, a white input and a dark button with lighter text. We want the button and input field centered and we want the whole add customer area to be centered within the reservations container. We want the title to be left-aligned but with a little margin from the left corner, and we want it underlined. We also want the button to become green on hover and seem clickable, so this is the css we would use:
    ```css
    .addCustomerFields{
        background-color: gainsboro;
        border: darkslategray 1px dotted;
        border-radius: 5px;
        width: 90%;
        margin: 0px auto;
    }

    .addCustomerTitle{
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 20px;
        color: darkslategrey;
        text-decoration: underline;
        font-size: 1rem;
    }

    .addCustomerNameInput{
        display: block;
        width: 80%;
        margin: 10px auto;
        height: 32px;
        text-align: center;
    }

    .addCustomerButton{
        display: block;
        width: 80%;
        background-color: darkslategrey;
        color: white;
        font-size: '1rem';
        margin: 10px auto;
        padding: 10px 0px;
        border-radius: 5px;
        border:rgba(0, 0, 0, 0.171)
    }

    .addCustomerButton:hover{
        cursor: pointer;
        background-color: seagreen;
        color: white
    }
    ```
1. Now we get to the customer food area. The container will be a simple div as follows:
    ```jsx
    <div className={styles.customersContainer}>
    </div>
    ```
1. We want the container to be pretty much the full length and scrollable, so we create a simple div with a className and give the following css styling:
    ```css
    .customersContainer{
        height: 80vh;
        overflow-y:auto;
    }
    ```
1. For each customer card, we wan the card to have the Customer's name prominently at the top, and in the bottom section we want the food items the customer orders on the left in a larger part and we want an option to add food items on the right, so the jsx for it will look as follows:
    ```jsx
    <div className={styles.customerCard}>
        <p className={styles.customerNameInCustomerCard}>Jane Doe</p>
        <div className={styles.foodContainerInCustomerCard}>
            <div className={styles.foodItemsContainerInCustomerCard}>
                <p className={styles.foodItem}>Oyster <FaTimes style={{color: 'red', fontSize: '10px'}}/></p>
                <p className={styles.foodItem}>Chapati <FaTimes style={{color: 'red', fontSize: '10px'}}/></p>
            </div>
            <div className={styles.addFoodItemsContainerInCustomerCard}>
                <input className={styles.addCustomerNameInput} type='text' placeholder='Food to add'/>
                <button className={styles.addCustomerButton}>Add Food</button>
            </div>
        </div>
    </div>
    ```    
    Each food item has an FaTimes component next to it which is imported form 'react-icons/fa'. It is a font awesome icon.
1. The customer card will be very similar in a sense to the reservations card, it's styling will look as follows:
    ```css
    .customerCard{
        display: flex;
        flex-direction: column;
        box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.171);
        border-radius: 5px;
        padding: 10px 20px;
        margin: 0px 20px 20px 20px;
        justify-content: space-between;
    }
    ```
1. We want the name of the customer to be prominently displayed at the top of the card, and we want it to have some space above and below, so the styling will look as follows:
    ```css
    .customerNameInCustomerCard{
        font-size: 32px;
        margin: 10px 0px;
    }
1. In the actual food area, we want the left 3/4ths to contain the actual food items and we want the right 1/4ths to have the area where the add food input and button are, therefore the styling of the food area container would be as follows:
    ```css
    .foodContainerInCustomerCard{
        display: grid;
        grid-template-columns: 3fr 1fr
    }
    ```
1. The food items container in the customer card is supposed to hold all the food items. They should wrap around and come down if there are more than one row of them. But we don't want the food items to be right next to each other so we can also give them a small gap. So the styling would look as follows:
    ```css
    .foodItemsContainerInCustomerCard{
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    ```
1. Then for the individual food items, we want them to appear small but with a little padding. We also want the shadow effect that all other cards have, but we will keep the shadow radius small since the food item cards are also small. We'll round the border so that the shadows don't seem to be at a harsh angle. We will also set the height to min-content. Otherwise, with p tags, they naturally want to take the full height of the parent content irrespective of the amount of content they have. The styling would be as follows:
    ```css
    .foodItem{
        padding: 2px;
        border-radius: 2px;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.171);
        height: min-content;
    }
    ```
1. Re-use the input and button styling from the add customer in reservations area. This makes the design scheme of the app look consistent and it saves us time.

### Creating the Redux Toolkit store and reservation slice

1. Add the dependencies to use redux toolkit in nextjs as follows:
    ```
    yarn add react-redux @reduxjs/toolkit next-redux-wrapper
    ```
1. Create an app folder in the root and a store.ts under the folder.
1. To create a const store we import configureStore from @reduxjs/toolkit. We put the reducer in it. Then we create a separate const makeStore which we will use for the next-redux-wrapper. The code will look as follows:
    ```ts
    import {configureStore} from '@reduxjs/toolkit'

    export const store = configureStore({
        reducer: {}
    })

    export const makeStore = () => store
    ```
    The makestore essentially creates a function that makes a store. We will need to put this function into the next-redux-wrapper's createWrapper function later.
1. Then we shall define types that will be exported and finally we have to create a const wrapper that will be exported which will be used in the _app.tsx to provide the store to the app at the root level. The const wrapper's createWrapper function is imported from 'next-redux-wrapper'
    ```ts
    export type AppStore = ReturnType<typeof makestore>;
    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch

    export const wrapper = createWrapper<AppStore>(makestore)
    ```
1. Now we go to the _app.tsx and where it says export default MyApp, we'll import wrapper from our store and wrap it around MyApp after calling its withRedux method. So that it's now:
    ```ts
    export default wrapper.withRedux(MyApp)
    ```
1. With this the redux toolkit store is ready and we can get to making the reservationSlice that will hold the data for the reservations at the app level. To do this we create a folder called features, and create a file in it called reservationSlice.ts.
1. In the reservationSlice we import createSlice from @reduxjs/tookit. We will create a const reservationSlice and in it will be a createSlice. Every slice takes in a name, an initial state, and reducers. The code will look as follows:
    ```ts
    import {createSlice} from '@reduxjs/toolkit'

    const reservationSlice = createSlice({
        name: 'reservations',
        initialState,
        reducers{

        }
    })
    ```
1. At this point typescript will yell at us because initialState is undefined. We will define it with a const initialState and by convention initialState is usually an object with a value property, under which the state is available. In our case this will be an array of strings, therefore we will also create an interface and assign this type to it. The code will look as follows:
    ```ts
    interface ReservationStateType{
        value: string[]
    }

    const initialState: ReservationStateType = {
        value: []
    }
    ```
    And now typescript will be happy.
1. In the reducer, we need to add a function that will add the name provided from the input to the state. This function will be under the reducers of the reservationSlice, the code will look as follows:
    ```ts
    const reservationSlice = createSlice({
        name: 'reservations',
        initialState,
        reducers: {
            add: (state, action: PayloadAction<String>) => {
                state.value.push(action.payload)
            }
        }
    })
    ```
    In this "add" will be the name of the function we call from our Next Pages, and components. PayloadAction here is imported from @reduxjs/toolkit and it is always the type of action. Within the generics of PayloadAction we add the type of the payload we will be passing to action. In this case it's just the name, so it will be a string. In the body of the function, we can simply push the name into the initialState array we have made. State is still immuatable so we shouldn't be able to do this but under the hood, immer is turning our mutable code into an immutable replacement.
1. We will also add a function to remove a reservation. The code will look as follows:
    ```ts
        remove: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        }
1. At the bottom of the page, we have to now export the add and remove functions for use. We will do this as follows:
    ```ts
    export const {add: addReservation, remove: removeReservation} = reservationSlice.actions
    ```
    Here we destructure the add function out of the reservationSlice, then we rename it to addReservation (that will be the function we call from our Next pages and components). We do the same with the remove function.
1. Then we need to export default the reducer, so we can add it to the store, which makes this state accessible throughout our app. The code will look as follows:
    ```ts
    export default reservationSlice.reducer
    ```
1. Finally, we import ReservationReducer from our reservationSlice and add it to const store in our store.ts as follows:
    ```ts
    import reservationReducer from '../features/reservationSlice'

    const store = configureStore({
        reducer: {
            reservations: reservationReducer
        }
    })
    ```

### Accessing reservations state on the page and adding new reservations to it

1. In order to access our reservations state we use the useSelector hook from react-redux. We pass in state into the function of type RootState (which we import from store.ts), and the return will be state.reservations.value. The code will look as follows:
    ```ts
    const reservations = useSelector((state: RootState) => state.reservations.value)
    ```
1. Now we create a folder called components and create a ReservationCard.tsx in it to put our ReservationCard component in it.
1. We can simply cut the code we had for our reservation card from our index.tsx and paste it after creating a component in the file with the rafce shortcut using the ES7+ React/Redux/React-Native snippets extension in VS Code.
1. We can also create a ReservationCard.module.css in the styles folder and cut, paste the relevant css for the ReservationCard component from the Home.module.css to it.
1. The code for ReservationCard will now look like:
    ```jsx
    const ReservationCard = () => {
  
        return (
            <div className={styles.reservationCard} onClick={() => removeReservationaddFood()}>
                <p>John Doe</p>
                <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
            </div>
        )
    }

    export default ReservationCard
    ```
    Cut, paste the import for FaHandPointRight, to prevent typescript from yelling at you.
1. Now instead of having every component say 'John Doe', we need it to say the name from the reservation, we also need to have an id for each ReservationCard so that when we click that reservation card, it is removed from reservations and we can add it to the customer Food section. So we will add name and id to the props and replace the 'John Doe' dynamically with the name. The code will now look as follows:
    ```jsx
    const ReservationCard = ({name, reservationId}: {name: string, reservationId: number}) => {
  
        return (
            <div className={styles.reservationCard} onClick={() => removeReservationaddFood()}>
                <p>{name}</p>
                <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
            </div>
        )
    }

    export default ReservationCard
    ```
1. When a reservationCard is clicked we need the card to be removed. In order to do this we'll need access to the dispatch. We need to import useDispatch from react-redux for this. This is what the code will look like:
    ```ts
    const dispatch = useDispatch()
    ```
1. Now we create a function that will remove that particular reservation from the state. For this we will need to import removeReservation from the reservationSlice. It will look as follows:
    ```ts
    const removeReservationFunction = () => {
        dispatch(removeReservation(reservationId))
    }
    ```
1. Then we create an onClick property to the outermost div of the ReservationCard, and call the removeReservationFunction in it. The code for ReservationCard will now look as follows:
    ```jsx
    import { FaHandPointRight } from "react-icons/fa"
    import styles from '../styles/ReservationCard.module.css'
    import {useDispatch} from 'react-redux'
    import { removeReservation } from "../features/reservationSlice"
    import { addCustomer } from "../features/customerSlice"

    const ReservationCard = ({name, reservationId}: {name:string, reservationId: number}) => {
    const dispatch = useDispatch()
    const removeReservationFunction = () => {
        dispatch(removeReservation(reservationId))
    }
    return (
        <div className={styles.reservationCard} onClick={() => removeReservationFunction()}>
            <p>{name}</p>
            <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
        </div>
    )
    }

    export default ReservationCard
    ```
1. Now we can bring the state into the index.tsx by using the useSelector hook imported from react-redux. The code will look as follows:
    ```ts
    const reservations = useSelector((state: RootState) => state.reservations.value)
    ```
1. Then under the reservationCardsContainer div, we can map out the reservations and put in the relevant ReservationCard components as follows:
    ```jsx
    <div className={styles.reservationCardsContainer}>
        {reservations.map((reservation, index) => {
            return <ReservationCard name={reservation} reservationId={index}/>
        })} 
    </div>
    ```
    Now on doing yarn dev, we should see the reservations.
1. Now to enable adding a new name to the reservations we need to create a new customer name state that we can double bind to the input, and we need to create a function that will add the name to the state. As part of the function we will need to use useDispatch from react-redux, and we need to import addReservation from the reservationSlice. At the beginning of the function, we also want to put a test such that if the iput is empty, a reservation is not added. At the end of the function, we also want to put code that will clear the input. The code will look as follows:
    ```ts
    const dispatch = useDispatch()
    const [customerName, setCustomerName] = useState('')

    const createReservation = () => {
        if(customerName === ''){ 
        return 
        }
        dispatch(addReservation(customerName))
        setCustomerName('')
    }
    ```
1. Now we can double bind the input, and add the function to the button on click as follows:
    ```jsx
    <input className={styles.addCustomerNameInput} type='text' placeholder='Customer Name' value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
    <button className={styles.addCustomerButton} onClick={() => createReservation()}>Add</button>
    ```

### Creating the customer slice and add functionality to the customer food section

1. Create a customerSlice.ts in the features folder. This will have an addCustomer, addFoodItem, and removeFoodItem function. Each Customer will need to have to have a name, a string array of foods, and a unique id (which we will use a string for since we intend to use the uuid package for unique id generation). Each foodItem will also need to have a name and a unique id (string), since we will have to remove specific food from specific people. The code for it all look as follows:
    ```ts
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
    ```
    For the add food and remove food actions, we can use complex filters along with splices and finding indexOf together as under the hood immer will turn it into an immutable replacement.
1. Now we need to add the reducer to the store. The store will now look as follows:
    ```ts
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
    ```
1. Now we can modify the ReservationCard to add a customer, as the reservation is removed. To do this, we will simply add the customer name, a new unique id using the uuid function which is imported from uuid (import {v4 as uuid} from 'uuid'). Before we can use this we need to add the uuid package and its types package as follows:
    ```
    yarn add uuid @types/uuid
    ```
    We will change the name of the removeReservationFunction and add the name to the customer food at the end. The new ReservationCard code will look as follows:
    ```jsx
    import { FaHandPointRight } from "react-icons/fa"
    import styles from '../styles/ReservationCard.module.css'
    import {useDispatch} from 'react-redux'
    import { removeReservation } from "../features/reservationSlice"
    import { addCustomer } from "../features/customerSlice"
    import {v4 as uuid} from 'uuid'

    const ReservationCard = ({name, reservationId}: {name:string, reservationId: number}) => {
    const dispatch = useDispatch()
    const removeReservationaddFood = () => {
        dispatch(removeReservation(reservationId))
        dispatch(addCustomer({name: name, reservationId: uuid(), food: []}))
    }
    return (
        <div className={styles.reservationCard} onClick={() => removeReservationaddFood()}>
            <p>{name}</p>
            <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
        </div>
    )
    }

    export default ReservationCard
    ```
1. Now we can cut, paste the code from the customersContainer div to a new CustomerCard.tsx component in the components folder after creating a function based component using rafce using the ES7+/React/Redux/React-Native snipperts extension.
1. The component will have name (string), reservationId (string), and food (array of strings) destructured from the props and the props will be of type Customer (imported from the customerSlice).
1. We will map through the foodItems in the foodItemsContainerInCustomerCard div, and give each a p tag with the pre-formatted class. Further we will add a hover className to the FaTimes component, that will change the cursor to a pointer in the css, so users know the x is clickable.
1. We then create a state for the currentFoodItem, double bind it to the input, and create a function to add it to the state on click, the function will also then turn the state to an empty string so that the input becomes empty.
1. We will also add a function to removeFoodItem. Ideally, for foodItems, there should have been a separate id for food which can be created with uuid as well as there may be two food items (both of the same type, but only one is removed). The code for the CustomerCard will look as follows:
    ```jsx
    import styles from '../styles/CustomerCard.module.css'
    import homestyles from '../styles/Home.module.css'
    import {FaTimes} from 'react-icons/fa'
    import {addFoodItem, Customer, removeFoodItem} from '../features/customerSlice'
    import { useState } from 'react'
    import { useDispatch } from 'react-redux'

    const CustomerCard = ({name, reservationId, food}: Customer) => {
        const [currentFoodItem, setCurrentFoodItem] = useState('')
        const dispatch = useDispatch()
        const addFoodItemFunction = () => {
            if(!currentFoodItem){return}
            dispatch(addFoodItem({id: reservationId, foodItem: currentFoodItem}))
            setCurrentFoodItem('')
        }
        const removeFoodItemFunction = (foodItem: string) => {
            dispatch(removeFoodItem({id: reservationId, foodItem: foodItem}))
        }
    return (
        <div className={styles.customerCard}>
            <p className={styles.customerNameInCustomerCard}>{name}</p>
            <div className={styles.foodContainerInCustomerCard}>
                <div className={styles.foodItemsContainerInCustomerCard}>
                    {food.map((foodItem) => {
                        return (<p className={styles.foodItem}>{foodItem} <FaTimes className={styles.hover} style={{color: 'red', fontSize: '10px'}} onClick={() => removeFoodItemFunction(foodItem)}/></p>)
                    })}
                </div>
                <div className={styles.addFoodItemsContainerInCustomerCard}>
                    <input className={homestyles.addCustomerNameInput} type='text' placeholder='Food to add' value={currentFoodItem} onChange={(e) => setCurrentFoodItem(e.target.value)}/>
                    <button className={homestyles.addCustomerButton} onClick={() => addFoodItemFunction()}>Add Food</button>
                </div>
            </div>
        </div>
    )
    }

    export default CustomerCard
    ```
1. Finally, we can bring in customers using the useSelector hook from react-redux in the index.tsx and map them onto CustomerCard components in the customersConttainer. The code will look as follows:
    ```ts
    const customers = useSelector((state: RootState) => state.customersFood.value)
    ```
    and 
    ```jsx
    <div className={styles.customersContainer}>   
        {customers.map((customer) => {
            return <CustomerCard name={customer.name} reservationId={customer.reservationId} food={customer.food}/>
        })}
    </div>
    ```


