import React from 'react';

class Questions extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div style={{
                padding: "200px",
                display:'none',
            }}
            className="sorting-questions">
                {this.props.questions.map((item, index)=>{
                    return(
                        <h1 className='question' id={index} style={{
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