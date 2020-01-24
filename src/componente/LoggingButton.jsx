import React , { Component } from 'react'

export default class LoggingButton extends Component{
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
    return (
        //<div>Frase: {this.state.isToggleOn}
        <button onClick={this.handleClick}>        
            {this.state.isToggleOn ? 'Clique aqui' : 'Clicado'}
            </button>
          //  </div>
    )
}
} 