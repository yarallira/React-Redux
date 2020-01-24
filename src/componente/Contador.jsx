import React , { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero: 100
    }

    maisUm = () => {
       // this.setState({numero: this.state.numero + 1})
       this.AlterarNumero(+1)
    }
    MenosUm = () => {
        //this.setState({numero: this.state.numero - 1})
        this.AlterarNumero(-1)
    }
    AlterarNumero = (diferenca) => {
        this.setState({numero: this.state.numero + diferenca})
    }

    render(){
        return (
            <div className="Contador">
            <div>Número: {this.state.numero} </div>
            <button onClick={this.maisUm}>Inc</button>
            <button onClick={this.MenosUm}>Dec</button>
            <button onClick={() => this.AlterarNumero(10)}>
                Inc 10</button>
            <button onClick={() => this.AlterarNumero(-10)}>
                Dec 10</button>
            </div>
        )
    }
} 