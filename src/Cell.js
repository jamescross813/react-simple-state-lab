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
        return <div className = 'cell' onClick = {this.setState({color: '#333'})} style={{backgroundColor: this.state.color}}></div>
    }

    
}

export default Cell