import React from 'react';
import './searchBar.css';

// function SearchBar(props) {
//     return(
//     <div>
//       <input type="text" placeholder="Search for names.." onChange={props.handleChange}></input>


//     </div>
//     )
// }


// export default SearchBar;
function SearchBar(props) {

    console.log("props", props)

    return(
        <div className="topnav">
            {/* <a class="active" href="#home">Home</a> */}
            {/* <a href="#navbar">NavBar</a> */}
            <a href="#musictable">MusicTable</a>
            <input type="text" placeholder="Search.."/>
        </div>

         )
    }
export default SearchBar;



