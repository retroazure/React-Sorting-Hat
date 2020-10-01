import React from 'react';

class Questions extends React.Component{
    constructor(){
        super();
        this.state = {
            questions: ["Do you respect Albus Dumbledore and Garrick Ollivander?", "Do you preach to Voldemort's ideals as the dark wizard?", "Do you value bravery and chivalry anything else?", "Do you find yourself to being a very intelligent Wizard?", "Do you think hard work and dedication pays off but also that knowledge is aquired through hardship and curiosity?", "Are you a great leader?"],
            sorting: false,
            // RavenClaw: [this.questions[2], this.questions[3]],
            // Slytherin: [this.questions[1], this.questions[5]],
            // Gryffindor: [this.questions[0], this.questions[2]],
            // Huffflepuff: [this.questions[0], this.questions[4]],
        }
    }

    render(){
        return(
            <div style={{
                padding: "200px",
                display:'none',
            }}
            className="sorting-questions">
                {this.state.questions.map((item, index)=>{
                    return(
                        <h1 style={{
                            border: "1px solid black",
                            padding: "10px",
                            backgroundColor: "red",
                        }} key={index}>{item}</h1>
                    )
                })}
            </div>
        )
    }
}

export default Questions;