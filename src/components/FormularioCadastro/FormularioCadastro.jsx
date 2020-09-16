import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import { TextField ,Container, Checkbox,FormControlLabel} from "@material-ui/core"

function FormularioCadastro({onSubmit}){
    
    const [nome,setNome] = useState("")
    const [sobrenome,setSobrenome] = useState("")
    const [cpf,setCpf] = useState("")
    const [promocoes,setPromocoes] = useState(true)
    const [newsletter,setNewsletter] = useState(true)
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}})
    return(
    <form onSubmit={(event) =>{
        event.preventDefault()
        onSubmit({nome,sobrenome,cpf,promocoes,newsletter})
    }}
    >

            <TextField 
                value={nome}

                onChange={(event) => {
                    setNome(event.target.value)
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
                     setSobrenome(event.target.value)

                 }}
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                margin="dense" 
                fullWidth
            />

            <TextField 
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                margin="dense" 
                fullWidth
            />
 
            <FormControlLabel checked={promocoes} control={<Checkbox onChange={(event)=>{
                setPromocoes(event.target.checked)
            }} id="promoções"  color="secondary" />} label="Promoções" />

            <FormControlLabel checked={newsletter} control={<Checkbox onChange={(event)=>{
                setNewsletter(event.target.checked)
            }} id="newsletter"  color="secondary" />} label="Newsletter" />

            <Button type="submit" variant="contained" color="secondary">Cadastro</Button>

    </form>
    )
}
export default FormularioCadastro