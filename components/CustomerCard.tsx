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