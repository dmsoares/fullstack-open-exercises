import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({name, handleClick}) => (
  <button onClick={handleClick}>{name}</button>
)

const StatsContent = ({feedback, name}) => {
  const {good, neutral, bad} = feedback;
  const total = good + neutral + bad;
  const statsCalc = {
    good() {
      return good;
    },
    neutral() {
      return neutral;
    },
    bad() {
      return bad;
    },
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

const Statistics = ({feedback}) => {
  return (
    <>
      <h1>statistics</h1>
      {
        Object.values(feedback).some(value => value !== 0) &&
          <section>
            <StatsContent feedback={feedback} name={'good'} />
            <StatsContent feedback={feedback} name={'neutral'} />
            <StatsContent feedback={feedback} name={'bad'} />
            <StatsContent feedback={feedback} name={'all'} />
            <StatsContent feedback={feedback} name={'average'} />
            <StatsContent feedback={feedback} name={'positive'} /> 
          </section>
      }
    </>
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
      <Statistics feedback={allClicks} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));