import './App.css';
import React, { Component } from "react"

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      gender: null,
      age: null,
      bodyPartArray: ["head", "neck", "back", "shoulder", "hand", "arm", "forearm", "wrist", "chest", "hip", "quad", "calve", "foot", "toe", "stomach"],
      selectedBodyPart: null,
      side: null,
      muscleJoint: null,
    }
    this.reRandomizer = this.reRandomizer.bind(this)
  }
  componentDidMount(){
    this.setState(
      {
        gender: Math.floor(Math.random() * 10) < 4 ? "Male" : "Female",
        side: Math.floor(Math.random() * 10) < 4 ? "Left" : "Right",
        age: Math.floor(Math.random() * 100),
        selectedBodyPart: this.state.bodyPartArray[Math.floor(Math.random()*this.state.bodyPartArray.length)]
      }
    )
  }
  reRandomizer(){
    this.setState(
      {
        gender: Math.floor(Math.random() * 10) < 4 ? "Male" : "Female",
        side: Math.floor(Math.random() * 10) < 4 ? "Left" : "Right",
        age: Math.floor(Math.random() * 100),
        selectedBodyPart: this.state.bodyPartArray[Math.floor(Math.random()*this.state.bodyPartArray.length)]
      }
    )
  }
  render() {
    return (
      <div className="App">
        <h1>Hāhā Practice</h1>
        <button onClick={this.reRandomizer}>New Client</button>
        <p>Gender: {this.state.gender}</p>
        <p>Age: {this.state.age}</p>
        <p>body part: {this.state.selectedBodyPart}</p>
        <p>Side: {this.state.side}</p>
      </div>
    );
  }
}


