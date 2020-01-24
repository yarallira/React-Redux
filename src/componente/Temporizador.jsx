import React , { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() { //  método do ciclo de vida Inicial
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
    }

    componentWillUnmount(){ // Vamos derrubar o temporizador no método do ciclo de vida / método do ciclo de vida Final
        clearInterval(this.timeID);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render(){
        return (
            <div>
                <h3>Hello, Word!</h3>
                <h2>Horário: {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    } 
}

function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}

 ReactDOM.render(
     <App />,
     document.getElementById('root')
 );
