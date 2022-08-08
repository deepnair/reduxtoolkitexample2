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