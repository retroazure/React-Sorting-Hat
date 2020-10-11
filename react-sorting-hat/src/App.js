import React from 'react';
import './App.css';
import Welcome from './components/Welcome'
import Questions from './components/Questions';


class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      questions: ["Do you respect Albus Dumbledore and Garrick Ollivander?", "Do you preach to Voldemort's ideals as the dark wizard?", "Do you value bravery and chivalry?", "Do you find yourself to being a very intelligent Wizard?", "Do you think hard work and dedication pays off but also that knowledge is aquired through hardship and curiosity?", "Are you a great leader?"],
      sorting: false,
      house: [],   //used to start the sorting process as in define whether the sorting is ready or not to return the family
      // RavenClaw: [this.questions[2], this.questions[3]],
      // Slytherin: [this.questions[1], this.questions[5]],
      // Gryffindor: [this.questions[0], this.questions[2]],
      // Huffflepuff: [this.questions[0], this.questions[4]],
      randomHouse: ["Slytherin", "Gryffindor", "Hufflepuff", "Ravenclaw"],
    }
  }
  
  render(){
  
  return (
    <div className="App">
      <Welcome/>   
      <Questions questions={this.state.questions} getAnswer={(e)=>{
        
      let selection = e.target.getAttribute('id'); //Gets the id of each question 
     
      
      for(let i = 0; i<2; i++){
        
        if(selection === '0'){
          this.state.house.push(0);
          console.log(this.state.house);
        }
    
        if(selection === '1'){
          this.state.house.push(1);
          console.log(this.state.house);
        }
        if(selection === '2'){
          this.state.house.push(2);
          console.log(this.state.house);
        }
        if(selection === '3'){
          this.state.house.push(3);
          console.log(this.state.house);
        }
        if(selection === '4'){
          this.state.house.push(4);
          console.log(this.state.house);
        }
        if(selection === '5'){
          this.state.house.push(5);
          console.log(this.state.house);
        }
        if(selection === '2' && this.state.house.includes(3)){
          console.log("Ravenclaw")
          console.log(this.state.house);
        }
        if(selection === '3' && this.state.house.includes(2)){
          console.log("Ravenclaw");
        }
        if(selection === '1' && this.state.house.includes(5)){
          console.log("Slytherin");
        }
        if(selection === '5' && this.state.house.includes(1)){
          console.log("Slytherin");
        }
        if(selection === '1' && this.state.house.includes(5)){
          console.log("Slytherin");
        }
        if(selection === '0' && this.state.house.includes(2)){
          console.log("Gryffindor");
        }
        if(selection === '2' && this.state.house.includes(0)){
          console.log("Gryffindor");
        }
        if(selection === '0' && this.state.house.includes(4)){
          console.log("Hufflepuff");
        }
        if(selection === '4' && this.state.house.includes(0)){
          console.log("Hufflepuff");
        }

        if(this.state.house.length > 1){
         
          this.state.house = [];
          const randomElement = [this.state.randomHouse[Math.floor(Math.random() * this.state.randomHouse.length)]];
          console.log(randomElement);

          break;
        }
       
        else{
          
          break;
        }
      }
    
      e.preventDefault();
      }}/>
    </div>

    );
  }
}
export default App;
