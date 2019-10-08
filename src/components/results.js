import React from 'react';
import Recipe from './recipe'

const Results = (props) => {

    return <div className="results">
        <ul>
            {Array.from(props.recipes).map((single, index) => {
                return (
                    <li key={index}>
                      <Recipe data={single}/>
                    </li>
                )
            })}
        </ul>
    </div>
}






export default Results