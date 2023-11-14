import React from "react";
import Cards from "./components/Cards";

//TODO:  COMPONENT es code + html
//* cada COMPONENT puede retornar un solo ELEMENT
export default function App() {
    const user = {
        nombre: "Ricardo",
        edad: 28
    }
    const users = []
  return (
    <div>
        {/* {
         code js   
        } */}
      <div id="container">
        <h1>APP demo queeee</h1>
        <Cards user={user}></Cards>
       
      </div>
    </div>
  );
}

/*
* Cada COMPONENT es una CLASE <- OBJETO { STATE:{} } <- COMPONENT
extends -> HEREDAR de una Clase <- Component
import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        THIS
    }
  render() {
    return (
      <div>App</div>
    )
  }
}

*/

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class Empleado extends Persona {
  constructor(pay, nombre) {
    super(nombre);
    this.pay = pay;
  }
}

// -> Empleado <- COMPONENT
