import React from 'react'
import {Link} from "react-router-dom";

export default function ConfirmationCode(props) {
    return (
        <div>
            <div className='container'>
                <div className='formulario'>
                    <div className="titulo">
                        Hemos enviado un código de verificación a tu correo electrónico
                    </div>
                    <div className="separador30"></div>
                    <div className="form-group">
                        <label htmlFor="code">Ingresa el Código de verificación</label>
                        <input type="text" name='code' onChange={props.handleInputChange}  />
                    </div>
                    
                    <div id="error" className="error">
                        Las costraseñas no coinciden
                    </div>
                    <button className='boton' onClick={props.siguiente} >
                        Verificar cuenta
                    </button>
                    <div className="login">
                        ¿No has recibido el código? <Link to="/">Reenviar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
