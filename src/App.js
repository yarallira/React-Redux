import React, { Component } from 'react';
import './App.css';
import Welcome from './componente/Welcome.jsx';
import Contador from './componente/Contador.jsx';
import Temporizador from './componente/Temporizador.jsx'
import Calculator from './componente/Calculator.jsx'
import SignUpDialog from './componente/SignUpDialog.jsx'
// import Props from './componente/Props.jsx';
// import ManipulandoEventos from './componente/ManipulandoEventos.jsx'
// import LoggingButton from './componente/LoggingButton.jsx'
// import LoginControl from './componente/LoginControl.jsx'
// import Page from './componente/Page.jsx'
// import Lista from './componente/Lista.jsx'
// import NameForm from './componente/NameForm.jsx'
// import Reservation from './componente/Reservation.jsx'
///import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Welcome  />
        <Contador />
        <Temporizador />    
        <Calculator />     
        <SignUpDialog />    
        {/* <NameForm />
        <Reservation />
        <Page />
        <Lista />
        <ManipulandoEventos/> 
        <LoggingButton/>
        <LoginControl /> 
        <Props valor={Math.pow(2,8)} aBcD="Boa tarde!" />    */}
      </div>
    );
  }
}

export default App;
