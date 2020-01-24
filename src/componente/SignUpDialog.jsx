import React , { Component } from 'react'

// function WelcomeDialog(props) {
//     return(
//         <FancyBorder color="blue">
//             <h1 className ="Dialog-title">
//                 Bem vindo!
//             </h1>
//             <p className="Dialog-message">
//                 Obrigado por visitar a nossa espaçonave!
//             </p>
//         </FancyBorder>
//     );    
// }

// function SplitPane(props) {
//     return(
//         <div className="SplitPane">
//             <div className="SplitPane-left">
//              {props.left}
//             </div>
//             <div className="SplitPane-right">
//             {props.right}
//             </div>
//         </div>
//     );   
// }

// function App() {
//     return(
//         <SplitPane
//         left={
//             <Contacts />
//         }
//         right={
//             <chat />
//         } />
//     );
// }

// function WelcomeDialog() {
//     return(
//         <Dialog
//         title="Bem-vindo"
//         message=" Obrigado por visitar a nossa espaçonave!" />
//     );
// }

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

function Dialog(props) {
    return(
        <FancyBorder color="blue">
            <h1 className = "Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.children}
            </p>
            </FancyBorder>
    );
}

export default class SignUpDialog extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render(){
        return(
            <Dialog title="Programa de Exploração de Marte"
            message="Como gostaria de ser chamado?" >
                <input value={this.state.login}
                onChange={this,this.handleChange} />

                <button onClick={this.handleSignUp} >
                    Cadastre-se!
                </button>
            </Dialog>
        );
    }
    handleChange(e){
        this.setState({login: e.target.value});
    }

    handleSignUp(){
        alert("Bem-vindo a bordo," + this.state.login + "!");
    }
}