import React from 'react'
import {Link} from "react-router-dom";

export default function UserProfile(props) {
    return (
        <div>
            <div className='container'>
                <div className='formulario'>
                    <div className="titulo">
                        Tu cuenta ha sido verificada de forma exitosa. <br />
                        ¡Ya puedes completar tu perfil!
                    </div>
                    <div className="separador30"></div>
                    <div className="form-group">
                        <label htmlFor="craftsman">Nombre del artesano o del grupo artesanal</label>
                        <input type="text" value={props.craftsman} name='craftsman' onChange={props.handleInputChange}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Número celular</label>
                        <input type="number" className='phoneNumber' name='phoneNumber' onChange={props.handleInputChange}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="origin">Lugar de origen</label>
                        <input type="text" className='password'  name='origin' onChange={props.handleInputChange} />
                    </div>

                    
                    <div className="form-group">
                        <label htmlFor="history">Historia del artesano o del grupo artesanal</label>
                        <textarea name="history" onClick={props.siguiente}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="typeCraft">Tipo de artesanía con el que más se identifica</label>
                        <input type="text"  name='typeCraft' onChange={props.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="technique">
                            Descripción de la técnica o la labor
                            que utilizan para la elaboración de la
                            mayoría de sus productos
                        </label>
                        <textarea name="technique" onClick={props.siguiente}></textarea>
                    </div>
                    <button className='boton' onClick={props.siguiente} >
                        Completar perfil
                    </button>
                </div>
                
            </div>
        </div>
    )
}
