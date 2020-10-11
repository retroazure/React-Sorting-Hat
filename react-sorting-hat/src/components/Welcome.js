import React from 'react';

class Welcome extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="welcome-div">
                 <h1>Welcome to Hogwards</h1>
                 <button onClick={(e)=>{
                    if(document.querySelector('.sorting-questions').style.display === 'none'){    
                        document.querySelector('.sorting-questions').style.display = "flex";
                        e.preventDefault();
                    }
                    else{
                        document.querySelector('.sorting-questions').style.display = "none";
                        e.preventDefault();
                    }
                 }}>Sorting Hat</button>
            </div>
        )
    }
        
}

export default Welcome;