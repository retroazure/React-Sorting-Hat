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
                    if(document.querySelector('.sorting-questions').style.display === 'none'){
                        document.querySelector('.sorting-questions').style.display = "block";
                    }
                    else{
                        document.querySelector('.sorting-questions').style.display = "none";
                    }
                 }}>Sorting Hat</button>
            </div>
        )
    }
        
}

export default Welcome;