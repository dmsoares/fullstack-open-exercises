import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({name, handleClick}) => (
  <button onClick={handleClick}>{name}</button>
)

const Stats = ({name, clicks}) => (
  <p>{name} {clicks}</p>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const saveClick = setFn => () => setFn(prev => prev + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button name={'good'} handleClick={saveClick(setGood)} />
      <Button name={'neutral'} handleClick={saveClick(setNeutral)} />
      <Button name={'bad'} handleClick={saveClick(setBad)} />
      <h1>statistics</h1>
      <Stats name={'good'} clicks={good} />
      <Stats name={'neutral'} clicks={neutral} />
      <Stats name={'bad'} clicks={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));