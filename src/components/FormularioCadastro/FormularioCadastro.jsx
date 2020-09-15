import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import { TextField ,Container, Checkbox,FormControlLabel} from "@material-ui/core"

function FormularioCadastro(){
    
    const [nome,setNome] = useState("")
    const [sobrenome,setSobrenome] = useState("")

    return(
    <form onSubmit={(event) =>{
        event.preventDefault()
        console.log(nome,sobrenome)
    }
    }>

            <TextField 
                value={nome}

                onChange={(event) => {
                    let tmpNome = event.target.value
                    if(tmpNome.length >= 3){
                        tmpNome = tmpNome.substr(0,3)
                     }
                    setNome(tmpNome)
                    
                }}
                id="nome" 
                label="Nome"
                variant="outlined" 
                margin="dense" 
                fullWidth 
            />


            <TextField
                 value={sobrenome}
                 onChange={(event) => {
                    let tmpSobrenome = event.target.value
                    if(tmpSobrenome.length >= 3){
                        tmpSobrenome = tmpSobrenome.substr(0,3)
                     }
                     setSobrenome(tmpSobrenome)

                 }}
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