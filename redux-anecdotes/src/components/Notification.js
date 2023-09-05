import { useSelector } from 'react-redux'


const Notification = () => {
  
  const notification = useSelector( state => state.notification )
  console.log('notificaton')
  console.log(notification)

  
    if(notification !== '') {
      

    

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