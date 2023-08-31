const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'VOTE':
      const id = action.payload.id
      const whatToVote = state.find(n => n.id === id)
      const changedAnecdote = {
        ...whatToVote,
        votes: whatToVote.votes + 1
      }
      console.log('VOTE')
      console.log(changedAnecdote)
      console.log(whatToVote)
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote)
    case 'NEW_ANECDOTE':
      return[...state, action.payload]

    default:
      return state
  }
  
}

export const createAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    payload: {
      content: anecdote,
      id: getId(),
      votes: 0

    }
  }
}

export const voteAnecdote = (id) => {
  console.log('vote', id)
  return{
    type: 'VOTE',
    payload: {id}
  }
}

export default reducer