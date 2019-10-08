import React, { useState } from 'react';
import Header from './components/header'
import SearchBar from './components/searchbar'
import Results from './components/results'
import './App.scss';

const App = () => {

  const [recipes, getRecipes] = useState([])

  let userInput;
  const APP_ID = process.env.REACT_APP_APP_ID
  const API_KEY = process.env.REACT_APP_API_KEY

  const getUserInput = (event) => {
    userInput = event.target.value
    // console.log(userInput)
  }

  const allRecipes = async (e) => {
    e.preventDefault()
    const response = await fetch(`https://api.edamam.com/search?q=${userInput}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=100`)
    const data = await response.json()
    // console.log(data.hits)
    getRecipes(data.hits)
  }

  return (
    <div className="App">
      <Header />
      <SearchBar getUserInput={getUserInput} allRecipes={allRecipes} />
      <Results recipes={recipes} getRecipes={getRecipes} />
    </div>
  );

}

export default App;
