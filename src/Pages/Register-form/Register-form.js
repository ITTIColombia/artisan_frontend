import React from 'react'
import { useState } from 'react';
import ConfirmationCode from './Confirmation-code';
import Email from './Email';
import './Register-form.scss'
import UserProfile from './User-profile';

export default class RegisterForm extends React.Component {
    state ={
        paso:1,
        name: "", 
        email: "", 
        craftsman:"",
        origin:"",
        phoneNumber: "",
        history:"", 
        typeCraft:"", 
        technique:"",
        password: "", 
        repeatPassword: ""
    };
    handleInputChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    };
    samePasword = () => {
        let error = document.getElementById('error')
        if(this.state.password !== this.state.repeatPassword){
            error.classList.add('visible')
            return false
        }
        else{
            error.classList.remove('visible')
            return true
        }
    }
    validarEmail = () => {
        let error = document.getElementById('errorEmail')
        let validador = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        if( validador.test(this.state.email) ){
            error.classList.remove('visible')
            return true;
        }else{
            error.classList.add('visible')
            return false;
        }
    }
    siguientePaso = () => {
        const {paso} = this.state;
            this.setState({
                paso: paso + 1
        })
        
        
    }
    paso1 = () => {
        this.samePasword()
        if(this.validarEmail() && this.state.password === this.state.repeatPassword && this.state.password !== "" && this.state.repeatPassword !== ""){
            this.siguientePaso()
        }
        
    }
    render(){
        switch(this.state.paso){
            case 1:
                return (
                    <Email handleInputChange={this.handleInputChange} state={this.state} verifyPassword={this.samePasword} siguiente={this.paso1} />
                )
            case 2:
                return(
                    <ConfirmationCode siguiente ={ this.siguientePaso } />
                )
            case 3:
                return(
                    <UserProfile/>
                )
            default:
                return <div>Error</div>
        }
    }
}
