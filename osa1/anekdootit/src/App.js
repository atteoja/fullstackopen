import { useState } from 'react'

const Button = ({clickHandle, name}) => (
  <button onClick={clickHandle}>{name}</button>
)

const randomInteger = length => Math.floor(Math.random() * length)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const updateVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    return (
      setVotes(copy)
    )
  }

  // Index of the most voted anecdote.
  var mostVoted = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>
        Has {votes[selected]} votes
      </div>

      <div>
        <Button clickHandle={() => updateVotes()}
        name='Vote' />
        <Button 
        clickHandle={() => setSelected(randomInteger(anecdotes.length))}
        name='Next Anecdote' />
      </div>

      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVoted]}
      <div>
        Has {votes[mostVoted]} votes
      </div>
    </div>
  )
}

export default App