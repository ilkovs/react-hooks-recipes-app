import React from 'react';

const SearchBar = (props) => {

    return (
        <div className="searchbar">
            <form onSubmit={(e) => props.allRecipes(e)}>
                <input type="text" className="searchField" onChange={(event) => props.getUserInput(event)} placeholder="Search meals..."/>
                <input type="submit" className="search" value="Search" />
            </form>
        </div>
    )
}

export default SearchBar