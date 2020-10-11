import React from 'react';

class Questions extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div style={{
                padding: '50px',
                display:'none',
                flexDirection: 'column',

            }}
            className="sorting-questions">
                {this.props.questions.map((item, index)=>{    
                    return(
                        <button onClick= {this.props.getAnswer} className='question' id={index} style={{
                            border: "1px solid black",
                            padding: "10px",
                            margin: "5px",
                            fontSize: '1.4rem',
                            backgroundColor: 'lightblue',
                        }} key={index}>{item}</button>
                    )
                })}
            </div>
        )
    }
}

export default Questions;