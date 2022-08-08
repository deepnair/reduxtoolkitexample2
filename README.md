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
