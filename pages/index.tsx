import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import ReservationCard from '../components/ReservationCard'
import { useState } from 'react'
import { addReservation } from '../features/reservationSlice'
import CustomerCard from '../components/CustomerCard'
import {Customer} from '../features/customerSlice'
import {v4 as uuid} from 'uuid'


const Home: NextPage = () => {
  const reservations = useSelector((state: RootState) => state.reservations.value)
  const dispatch = useDispatch()
  const [customerName, setCustomerName] = useState('')
  const customers = useSelector((state: RootState) => state.customersFood.value)

  const createReservation = () => {
    if(customerName === ''){ 
      return 
    }
    dispatch(addReservation(customerName))
    setCustomerName('')
  }

  return (
    <>
      <div className={styles.restaurantTitle}>
        <h1>Redux toolkit restaurant</h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.reservationsContainer}>
          <div className={styles.reservationCardsContainer}>
            {reservations.map((reservation, index) => {
              return <ReservationCard name={reservation} reservationId={index}/>
            })} 
          </div>
          <div className={styles.addCustomerFields}>
            <p className={styles.addCustomerTitle}>Add Customer</p>
            <input className={styles.addCustomerNameInput} type='text' placeholder='Customer Name' value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
            <button className={styles.addCustomerButton} onClick={() => createReservation()}>Add</button>
          </div>
        </div>
        <div className={styles.customersContainer}>   
            {customers.map((customer) => {
              return <CustomerCard name={customer.name} reservationId={customer.reservationId} food={customer.food}/>
            })}
        </div>
      </div>
    </>
  )
}

export default Home
