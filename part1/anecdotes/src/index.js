import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Content = ({anecdotes, votes, selected}) => (
  <div>
    {anecdotes[selected]}
    <p>has {votes[selected]}</p>
  </div>
)

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>{text}</button>
)

const DailyAnecdote = ({anecdotes, votes, addVote}) => {
  const [selected, setSelected] = useState(0);
  const randomizeSelected = () => setSelected(Math.floor(Math.random() * 6));

  return (
    <section>
      <h1>Anecdote of the day</h1>
      <Content anecdotes={anecdotes} votes={votes} selected={selected} />
      <Button text={'next anecdote'} handleClick={randomizeSelected} />
      <Button text={'vote'} handleClick={() => addVote(selected)} />
    </section>
  )
}

const MostVoted = ({anecdotes, votes}) => {
  const mostVoted = votes.indexOf(Math.max(...votes));

  return (
    <section>
      <h1>Anecdote with most votes</h1>
      <Content anecdotes={anecdotes} votes={votes} selected={mostVoted} />
    </section>
  )
}

const App = ({anecdotes}) => {
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const addVote = (selected) => setVotes(prev => {
    const copy = [...prev];
    copy[selected]++;
    return copy;
  });

  return (
    <>
      <DailyAnecdote anecdotes={anecdotes} votes={votes} addVote={addVote} />  
      <MostVoted anecdotes={anecdotes} votes={votes} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));