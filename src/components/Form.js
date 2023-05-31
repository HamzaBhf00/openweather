/* campo de input que seria el boton para hace la buqueda de la localizacion
 de la ciudad y nos muestre sus datos de tiempo*/

import React, { useState, userState } from 'react';

const Form = () => {
    const [city, setCity] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({city});
    }

    return (
        //onChange{(e)} es un evento que solo se ejecute cuando pulsamos el boton, modificamos setCity y le pasamos el valor actual que tiene el campo (15:00)
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto"> 
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)} /> 
                    <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;