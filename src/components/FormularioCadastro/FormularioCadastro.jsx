import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { TextField ,Container, Checkbox,FormControlLabel} from "@material-ui/core"

function FormularioCadastro(){
    let nome ="";
    
    return(
    <form onSubmit={(event) =>{
        event.preventDefault()
        console.log(nome)
    }
    }>

            <TextField 
                onChange={(event) => {
                    nome= event.target.value

                }}
                id="nome" 
                label="Nome"
                variant="outlined" 
                margin="dense" 
                fullWidth 
            />


            <TextField 
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                margin="dense" 
                fullWidth
            />

            <TextField 
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin="dense" 
                fullWidth
            />
 
            <FormControlLabel control={<Checkbox id="promoções" defaultChecked color="primary" />} label="Promoções" />
            <FormControlLabel control={<Checkbox id="newsletter" defaultChecked color="primary" />} label="Newsletter" />

            <Button type="submit" variant="contained" color="primary">Cadastro</Button>

    </form>
    )
}
export default FormularioCadastro