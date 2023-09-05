import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'



const anecdoteSlice = createSlice ({
  name: 'anecdotes',
  initialState : [],
  reducers: {
    
    voteAnecdote(state, action) {
      console.log(action)
      console.log(JSON.parse(JSON.stringify(state)))
      const id = action.payload.id
      const whatToVote = state.find(n => n.id === id)
      console.log(whatToVote)
      const changedAnecdote = {
        ...whatToVote,
        votes: whatToVote.votes + 1
      }
      console.log('VOTE')
      console.log(changedAnecdote)
      console.log(whatToVote)
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote)
    }, 
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }

  }
})


export const {voteAnecdote, appendAnecdote, setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdote = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const votean = id => {
  return async dispatch => {
    const votedAnecdote = await anecdoteService.vote(id)
    dispatch(voteAnecdote(votedAnecdote))

  }
}
export default anecdoteSlice.reducer