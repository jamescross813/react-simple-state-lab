import React from 'react'

class Cell extends React.Component{
    constructor(prop){
        super();
        this.state = {
            color: prop.value
        }
    }

    colorChange = () =>{
        const newColor = '#333'
        this.setState({
            color: newColor})
    }

    render(){
        return <div className = 'cell' onClick = {console.log('clicked')}></div>
    }

    
}

export default Cell