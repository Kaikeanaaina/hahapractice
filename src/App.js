import './App.css';
import React, { Component } from "react"

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      gender: null,
      age: null,
      bodyPartArray: ["Head", "Neck", "Back", "Shoulder", "Hand", "Arm", "Forearm", "Wrist", "Chest", "Hip", "Quad", "Calve", "Foot", "Toe", "Stomach"],
      selectedBodyPart: null,
      side: null,
      muscleJoint: null,
      time: ["Day", "Week", "Month", "Year"],
      selectedTime: null,
      amountTime: null
    }
    this.reRandomizer = this.reRandomizer.bind(this)
  }
  componentDidMount(){
    this.setState(
      {
        gender: Math.floor(Math.random() * 10) < 4 ? "Male" : "Female",
        side: Math.floor(Math.random() * 10) < 4 ? "Left" : "Right",
        age: Math.floor(Math.random() * 100),
        selectedBodyPart: this.state.bodyPartArray[Math.floor(Math.random()*this.state.bodyPartArray.length)],
        selectedTime: this.state.time[Math.floor(Math.random()*this.state.time.length)],
        amountTime: Math.floor(Math.random() * 10)
      }
    )
  }
  reRandomizer(){
    this.setState(
      {
        gender: Math.floor(Math.random() * 10) < 4 ? "Male" : "Female",
        side: Math.floor(Math.random() * 10) < 4 ? "Left" : "Right",
        age: Math.floor(Math.random() * 100),
        selectedBodyPart: this.state.bodyPartArray[Math.floor(Math.random()*this.state.bodyPartArray.length)],
        selectedTime: this.state.time[Math.floor(Math.random()*this.state.time.length)],
        amountTime: Math.floor(Math.random() * 10)
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
        <p>Body part: {this.state.selectedBodyPart}</p>
        <p>Side: {this.state.side}</p>
        <p>Duration of Pain: {this.state.amountTime} {this.state.selectedTime}</p>
      </div>
    );
  }
}


