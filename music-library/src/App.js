import React, { Component } from "react";
import axios from "axios";
import MusicTable from './components/MusicTable/musicTable';
import SearchBar from './components/SearchBar/searchBar';
import NavBar from './components/NavBar/navBar';
import Form from './components/Form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      music: [],
      filters:""
    };
  }

  componentDidMount() {
    console.log("Component mounted!");
    this.fetchMusic();
  }

  
  async fetchMusic() {
    try {
       let response = await axios.get("http://localhost:3000/api/songs");
        this.setState({
         music: response.data,
      });
      console.log(this.state.music);
    } catch (err) {
      console.log(err);
    }
  }

  handleChange(event){

    event.preventDefault();
    this.setState({filters:event.target.value})
    console.log(this.state.filters)
  }





  render() {
    let newArrayOfMusic = this.state.music.filter(song => {
      return(
      song.title.toLowerCase().includes(this.state.filters.toLowerCase()) ||
      song.album.toLowerCase().includes(this.state.filters.toLowerCase()) ||
      song.artist.toLowerCase().includes(this.state.filters.toLowerCase()) ||
      song.genre.toLowerCase().includes(this.state.filters.toLowerCase()) ||
      song.releaseDate.toLowerCase().includes(this.state.filters.toLowerCase())
      )
    });
      

    console.log(this.state.music);
    console.log("Component rendered!");
    return (
      <React.Fragment>
        <NavBar />
        <SearchBar handleChange={(event)=>this.handleChange(event)}/>
        <MusicTable music={newArrayOfMusic} />
        <Form />
      </React.Fragment>
    );
  }
  
 
}

export default App;



// class App extends Component {
//   state = {
//     songs: [],
//   };

//   componentDidMount() {
//     this.getAllSongs();
//   }

//   async getAllSongs() {
//     let response = await axios.get(
//       "http://www.devcodecampmusiclibrary.com/api/music"
//     );
//     console.log("response", response.data)
//     this.setState({
//       songs: response.data,
//     });
//   }
//   render() {
//    return(
//      <div>
//         <MusicTable songdata={this.state.songs}/>
//      </div>
//    )
// }
// }



// export default App;
