import React from 'react'
import {Link} from "react-router-dom";

export default function Email(props) {
  
    
    return (
        <div>
            <div className='container'>
                <div className='formulario'>
                    <div className="titulo">
                        Potencializa tus ventas y aumenta tus ingresos 
                        <span> vendiendo directamente</span> a los clientes finales
                    </div>
                    <div className="separador30"></div>
                    <div className="form-group">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" value={props.email} name='email' onChange={props.handleInputChange}  />
                    </div>
                    <div id="errorEmail" className="error">
                        Email no válido
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className='password' name='password' onChange={props.handleInputChange}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="repeatPassword">Repetir contraseña</label>
                        <input type="password" id='rpassword' className='password'  name='repeatPassword' onChange={props.handleInputChange} />
                    </div>
                    <div id="error" className="error">
                        Las costraseñas no coinciden
                    </div>
                    <button className='boton' onClick={props.siguiente} >
                        Crear cuenta
                    </button>
                    <div className="login">
                        ¿ya tienes una cuenta? <Link to="/">Inicia Sesión</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
