import { useDispatch, useSelector } from 'react-redux'
import { votean } from '../reducers/anecdoteReducer'
import { setNotification} from '../reducers/notificationReducer'

const Anecdote = ({anecdote, handleClick}) => {
    return(
        <li>
            {anecdote.content}
            <p>has {anecdote.votes} votes
            <button onClick={handleClick}>vote</button>
            </p>
        </li>
    )
}

const AnecdoteList = () => {
    const dispatch = useDispatch()
    console.log('anecdote list')
    const anecdotes = useSelector(state => state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter)))
    console.log(anecdotes)
    

    anecdotes.sort((a,b) => b.votes - a.votes)
    const vote = (anecdote) => {
        dispatch(votean(anecdote.id))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 1))
    }

    
    
    
    return(
        <ul>
            {anecdotes.map(anecdote =>
                <Anecdote
                key={anecdote.id}
                anecdote={anecdote}
                handleClick={() =>
                vote(anecdote)
            }
            />
            )}
        </ul>
    )
}
export default AnecdoteList