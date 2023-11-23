import React from 'react'

export default function validate(input){

    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //name
    if(!input.name) errors.name = "Se requiere un nombre";
    //email
    if (!regexEmail.test(input.email)) errors.email = "Debe ser un correo electrónico";
    //message
    if(!input.message) errors.message = "Se requiere un mensaje";

  return errors;
}
