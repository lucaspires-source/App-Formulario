import React, { Component } from 'react';
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx"
import './App.css';
import { Container, Typography} from "@material-ui/core"
import 'fontsource-roboto'
class App extends Component {
  render (){
   return(
    <Container component="article" maxWidth="sm">

          <Typography variant="h3" align="center" component="h1" font>Formulário de Cadastro </Typography>
          <FormularioCadastro/>
    </Container>
   )
}
}

export default App;
