import React from 'react';

class Welcome extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="welcome-div">
                 <h1>Welcome to Hogwards</h1>
                 <button onClick={()=>{
                    document.querySelector('.sorting-questions').style.display = "block";
                 }}>Sorting Hat</button>
            </div>
        )
    }
        
}

export default Welcome;