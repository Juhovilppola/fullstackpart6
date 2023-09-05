import { useDispatch, useSelector } from 'react-redux'
import {clearNotification} from '../reducers/notificationReducer'

const Notification = () => {
  //const dispatch = useDispatch()
  const notification = useSelector( state => state.notification )
  console.log('notificaton')
  console.log(notification)

  /*if(notification[0] !== 0) {
    let message = ''
    if(notification[0] === 1){
      
      message = "you voted " + notification[1]
    }*/
    if(notification !== '') {
      /*setTimeout(() => {
        console.log('time out')
        dispatch(clearNotification())
      }, 5000)*/

    

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>

      {notification}
    </div>
  )
  }
}
export default Notification