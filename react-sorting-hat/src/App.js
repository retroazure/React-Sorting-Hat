import React from 'react';
import './App.css';
import Welcome from './components/Welcome'
import Questions from './components/Questions';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      questions: ["Do you respect Albus Dumbledore and Garrick Ollivander?", "Do you preach to Voldemort's ideals as the dark wizard?", "Do you value bravery and chivalry?", "Do you find yourself to being a very intelligent Wizard?", "Do you think hard work and dedication pays off but also that knowledge is aquired through hardship and curiosity?", "Are you a great leader?"],
      sorting: false,  //used to start the sorting process as in define whether the sorting is ready or not to return the family
      // RavenClaw: [this.questions[2], this.questions[3]],
      // Slytherin: [this.questions[1], this.questions[5]],
      // Gryffindor: [this.questions[0], this.questions[2]],
      // Huffflepuff: [this.questions[0], this.questions[4]],
    }
  }
  
  render(){
  
  return (
    <div className="App">
      <Welcome/>   
      <Questions questions={this.state.questions}/>
    </div>

    );
  }
}
export default App;
