import React, { useState } from 'react';

const Recipe = (props) => {

    const [toggling, setToggle] = useState(false)

    const showIngredients = () => {
        if (toggling !== true) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }
    let calories = props.data.recipe.calories.toFixed(2)

    return (
        <div>
            <img src={props.data.recipe.image} alt={props.data.recipe.label} />
            <h2>{props.data.recipe.label}</h2>
            <p>Calories: {calories}</p>
            <p>Source: {props.data.recipe.source}</p>
            <div>
                <a href={props.data.recipe.url} target="_blank" rel="noopener noreferrer" className="instructions">Instructions</a>
            </div>
            <button className="view" onClick={showIngredients} style={toggling ? { background: '#b83939' } : { background: 'green' }}>{toggling ? 'Hide Ingredients' : 'View Ingredients'}</button>
            <ul className="ingredients" style={toggling ? { display: 'block' } : { display: 'none' }}>
                {props.data.recipe.ingredientLines.map((ingredient, id) => (
                    <li key={id}>
                        {ingredient}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe