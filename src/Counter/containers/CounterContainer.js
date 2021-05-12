// Crear un container que usa la logica -> implementar counter, llamar memoria...
// Crear otro componente que renderiza a nivel visual -> tiene estilos

import React, { useState } from 'react'
import {CounterComponent} from '../components/CounterComponent'

export const CounterContainer = (props) => {

    const { initialValue } = props;
    
    const [getCounter, setCounter] = useState(initialValue);

    return (
        // esto es un fragment,(en vez de poner un div wrapper)
        <>
            <CounterComponent getCounter={getCounter} setCounter={setCounter}></CounterComponent>
        </>
    );

};

// Solo puede haber un default por fichero
// En mas movil se exportan todas las variables sin default
