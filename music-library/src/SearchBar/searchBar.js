import React from 'react';
import './searchBar.css';

function SearchBar(props) {
console.log("props", props)

return(
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#">About</a>
        <a href="#contact">Contact</a>
        <input type="text" placeholder="Search..">
    </div>
)
}


export default SearchBar;