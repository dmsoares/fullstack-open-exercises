import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({name, handleClick}) => (
  <button onClick={handleClick}>{name}</button>
)

const Clicks = ({name, clicks}) => (
  <p>{name} {clicks}</p>
)

const Stats = ({allClicks, name}) => {
  const {good, neutral, bad} = allClicks;
  const total = good + neutral + bad;
  const statsCalc = {
    all() {
      return total;
    },
    average() {
      return total !== 0 ? (good - bad) / (total) : 0;
    },
    positive() {
      return total !== 0 ? good * 100 / (total) + ' %' : '0 %';
    }
  }
  return (
    <p>{name} {statsCalc[name]()}</p>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const allClicks = {good, neutral, bad};
  
  const saveClick = setFn => () => setFn(prev => prev + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button name={'good'} handleClick={saveClick(setGood)} />
      <Button name={'neutral'} handleClick={saveClick(setNeutral)} />
      <Button name={'bad'} handleClick={saveClick(setBad)} />
      <h1>statistics</h1>
      <Clicks name={'good'} clicks={good} />
      <Clicks name={'neutral'} clicks={neutral} />
      <Clicks name={'bad'} clicks={bad} />
      <Stats allClicks={allClicks} name={'all'} />
      <Stats allClicks={allClicks} name={'average'} />
      <Stats allClicks={allClicks} name={'positive'} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));