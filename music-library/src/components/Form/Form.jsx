import React from 'react';
import "./Form.css";


class Form extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
            title:"",
            album: "",
            artist: "",
            releaseDate: "", 
            genre: "",
           
            
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }

    handleChange(event) {
          const form = document.getElementById("form");
          let change = {form}
          change[event.target.name] = event.target.value
          this.setState(change);
          console.log(change[event.target.name]);
      }


    handleSubmit(event){
        const form = document.getElementById("form");
        form.addEventListener("submit",(event) => {
            event.preventDefault();
            const req = new XMLHttpRequest();
            console.log(form)
            req.open("post", "http://localhost:3000/api/songs")
            req.onload = () => {
              console.log(req.responseText);
            }
            let formData = new FormData(form);
            for (let [key, value] of formData.entries())
            console.log(key,value);
            req.send(formData);
            console.log("Form submitted");
            
        })
      }

    render(){
        
        return(<div className="form-container">
        <form id="form" >
            <div className="user-container">
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title} placeholder="Title"/>
                <label>Title</label>
            </div>
            <div className="user-container">
                <input type="text" name="album" onChange={this.handleChange} value={this.state.album} placeholder="Album"/>
                <label>Album</label>
            </div>
            <div className="user-container">
                <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist} placeholder="Artist"/>
                <label>Artist</label>
            </div>
            <div className="user-container">
                <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre} placeholder="Genre"/>
                <label>Genre</label>
            </div>
            <div className="user-container">
                <input type="text" name="releaseDate" onChange={this.handleChange} value={this.state.releaseDate} placeholder="Release Date"/>
                <label>Release Date</label>
            </div>
            <div className="user-container" >
                    <button type="submit" onClick={this.handleSubmit} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit</button>
            </div>
        </form>
    </div>);
    }
}
export default Form;