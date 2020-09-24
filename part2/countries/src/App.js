import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Countries from './components/Countries'
import Search from './components/Search'

function App() {
  const [countries, setCountries] = useState([])
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        console.log(response.data)
      })
  }, [])

  return (
    <>
      <Search setSearchString={setSearchString} searchString={searchString} />
      <Countries countries={countries} searchString={searchString} />
    </>
  );
}

export default App;
