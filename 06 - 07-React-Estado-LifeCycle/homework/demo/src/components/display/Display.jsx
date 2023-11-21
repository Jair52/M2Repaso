import React, { useEffect } from 'react'

export default function Display(props) {

    // Al montarse al DOM
    useEffect(() => {
      console.log("Se monto al DOM");
    }, []);
    
    //Al actualizar el componente
    useEffect(() => {
        console.log("Se actualizo");
      }, [props.counter]);

    //Al desmontarse del DOM
    useEffect(() => () => {
        console.log("Display se desmontara del DOM");
      }, []);

    return (
        <div style={{backgroundColor:"black"}}>
            <h3>Display</h3>
            <h3>Variable:{props.counter}</h3>
            <button onClick={props.handleIncrement}>Sumar desde Display</button>
        </div>
      )
} 
