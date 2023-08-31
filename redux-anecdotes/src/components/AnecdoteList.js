import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

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
    const anecdotes = useSelector(state => state)
    anecdotes.sort((a,b) => b.votes - a.votes)
    return(
        <ul>
            {anecdotes.map(anecdote =>
                <Anecdote
                key={anecdote.id}
                anecdote={anecdote}
                handleClick={() =>
                dispatch(voteAnecdote(anecdote.id))
            }
            />
            )}
        </ul>
    )
}
export default AnecdoteList