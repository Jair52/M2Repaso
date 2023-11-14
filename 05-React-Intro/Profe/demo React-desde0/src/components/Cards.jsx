import React from 'react'

export default function Cards({user}) {
    // props.user
  return (
    <div>
        <h2>Cards</h2>
        <p>Mi nombre es: {user.nombre}</p>
        <p>y mi edad es: {user.edad}</p>
    </div>
  )
}
