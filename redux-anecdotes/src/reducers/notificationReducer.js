import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice ({
    name: 'notification',
    initialState: '',
    reducers: {
   
        voteNotification (state, action) {
            console.log('create notification')
            const vote = `you voted '${action.payload}'`
            return state = vote

        },
        newAnecdoteNotification(state, action) {
            const newAnecdote = `you created '${action.payload}'`
            console.log(newAnecdote)
            return state = newAnecdote
        },
        clearNotification(state, action ) {
            console.log('remove')
            return state = ''
        },
        returnNotification(state, action) {
            return state = action.payload
        }
    }
})
export const {returnNotification, newAnecdoteNotification, clearNotification } = notificationSlice.actions
export const setNotification = (content, timer) => {
    
    return dispatch => {
        dispatch(returnNotification(content))
        setNotification(content)
        setTimeout(() => {
            dispatch(clearNotification())
        }, timer * 1000)
    }
}
export default notificationSlice.reducer