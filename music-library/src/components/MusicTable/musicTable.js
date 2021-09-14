import React from "react";
import './musicTable.css';

const MusicTable = ({ music }) => {
  let renderedMusic = music.map((song) => {
      return (

                     <tbody>
                         <tr>
                              <td>{song.title}</td>
                              <td>{song.album}</td>
                              <td>{song.artist}</td>
                              <td>{song.genre}</td>
                              <td>{song.releaseDate}</td>
                          </tr>
                     </tbody>

     );
  });

 return (
    
     <div className = "table-wrapper">
         <table className = "fl-table">
             <thead>
                <tr>
                  <th scope="col">title</th>
                  <th scope="col">album</th>
                  <th scope="col">artist</th>
                  <th scope="col">genre</th>
                  <th scope="col">releaseDate</th>
                </tr>
             </thead>
             {renderedMusic}
         </table>
            
         
     </div>);
 };




export default MusicTable;
// function MusicTable(props) {

//     console.log("props", props)

//     return(
//       <table class="table">
//       <thead>
        // <tr>
        //   <th scope="col">title</th>
        //   <th scope="col">album</th>
        //   <th scope="col">artist</th>
        //   <th scope="col">genre</th>
        //   <th scope="col">releaseDate</th>
        // </tr>
//       </thead>
//       <tbody>
//         {props.songdata.map(song =>{
          
//           return(
            // <tr>
            //   <td>{song.title}</td>
            //   <td>{song.album}</td>
            //   <td>{song.artist}</td>
            //   <td>{song.genre}</td>
            //   <td>{song.releaseDate}</td>
            // </tr>
//           )
//         })}
//       </tbody>
//     </table>
//     )
  


// }
// export default MusicTable;