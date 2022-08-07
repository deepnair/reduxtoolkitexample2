import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {FaHandPointRight, FaTimes} from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.restaurantTitle}>
        <h1>Redux toolkit restaurant</h1>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.reservationsContainer}>
          <div className={styles.reservationCardsContainer}>
            <div className={styles.reservationCard}>
              <p>John Doe</p>
              <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
            </div>

            <div className={styles.reservationCard}>
              <p>John Doe</p>
              <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
            </div>
            <div className={styles.reservationCard}>
              <p>John Doe</p>
              <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
            </div>
            <div className={styles.reservationCard}>
              <p>John Doe</p>
              <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
            </div>
            <div className={styles.reservationCard}>
              <p>John Doe</p>
              <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
            </div>
            <div className={styles.reservationCard}>
              <p>John Doe</p>
              <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
            </div>
            <div className={styles.reservationCard}>
              <p>John Doe</p>
              <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
            </div>
            <div className={styles.reservationCard}>
              <p>John Doe</p>
              <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
            </div>
            <div className={styles.reservationCard}>
              <p>John Doe</p>
              <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
            </div>
            <div className={styles.reservationCard}>
              <p>John Doe</p>
              <FaHandPointRight style={{color: 'seagreen', fontSize: '1rem'}}/>
            </div>
            
          </div>
          <div className={styles.addCustomerFields}>
            <p className={styles.addCustomerTitle}>Add Customer</p>
            <input className={styles.addCustomerNameInput} type='text' placeholder='Customer Name'/>
            <button className={styles.addCustomerButton}>Add</button>
          </div>
        </div>
        <div className={styles.customersContainer}>
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

          
        </div>
      </div>
    </>
  )
}

export default Home
