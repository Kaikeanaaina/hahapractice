import './App.css';
import React, { Component } from "react"

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      gender: null,
      age: null,
      bodyPart: ["head", "neck", "back", "shoulder", "hand", "arm", "forearm", "wrist", "chest", "hip", "quad", "calve", "foot", "toe"],
      muscleJoint: null,
    }
  }
  componentDidMount(){
    this.setState(
      {
        gender: Math.floor(Math.random() * 10) < 4 ? "Male" : "Female",
        age: Math.floor(Math.random() * 100)
      }
    )
  }
  randomBodyPart(bodyPart){
    return bodyPart[Math.floor(Math.random()*bodyPart.length)]
  }
  render() {
    return (
      <div className="App">
        <h1>Hāhā Practice</h1>
        <p>Gender: {this.state.gender}</p>
        <p>Age: {this.state.age}</p>
        <p>body part: {this.randomBodyPart(this.state.bodyPart)}</p>
        <p>muscle or joint</p>
        <p></p>
        <p></p>
      </div>
    );
  }
}


