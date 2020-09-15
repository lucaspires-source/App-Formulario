import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

function FormularioCadastro(){
    return(
    <form>
        <label>Nome</label>
        <input type="text"/>

        <label>Sobrenome</label>
        <input type="text"/>

        <label>CPF </label>
        <input type="text"/>

        <label>Promoções</label>
        <input type="checkbox"/>

        <label>Newsletter</label>
        <input type="checkbox"/>

        <Button type="submit" variant="contained" color="primary">Cadastro</Button>
    </form>
    )
}
export default FormularioCadastro