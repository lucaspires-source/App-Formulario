import React, { Component, Fragment } from 'react';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx"
import './App.css';

class App extends Component {
  render (){
   return(
   <Fragment>
      <h1>Formulário</h1>
      <FormularioCadastro/>
  </Fragment> 
   )
}
}

export default App;
