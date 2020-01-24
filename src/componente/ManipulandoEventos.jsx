import React , { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        // Aqui utilizamos o 'bind' para que o 'this' funcione dentro da nossa calllback
        this.handleClick = this.handleClick.bind(this);
}
handleClick(){
    this.setState( state => ({
        isToggleOn: !state.isToggleOn
    }));
}

render(){
    return(
        <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON': 'OFF'}
        </button>
    );
}
}

ReactDOM.render(
    <Toggle/>,
    document.getElementById('root')
);