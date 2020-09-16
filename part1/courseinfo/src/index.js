import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <div>
    <h1>{props.course}</h1>
  </div>
)

const Part = (props) => (
  <p>{props.name} {props.exercises}</p>
)

const Content = ({parts}) => (
  parts.map((part, index) => <Part key={part+index} name={part.name} exercises={part.exercises} />)
)

const Total = ({parts}) => {
return (
  <div>
    <p>Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}</p>
  </div>
)}

const App = () => {
  const course = {
    name: 'Half Stack application development', 
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  } 

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> 
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);