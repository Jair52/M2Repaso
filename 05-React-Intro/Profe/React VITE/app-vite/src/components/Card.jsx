import React, { useState } from 'react'

export default function Card({user}) {
    const [id, setId] = useState("hola soy estado")
    
  return (
    <div>
        <h2>Nombre: {user.nombre}</h2>
        <h3>Edad: {user.edad}</h3>
    </div>
  )
}
