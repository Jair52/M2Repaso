import React from 'react'
import './Contact.modules.css'
import validate from '../validate';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });

    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorsArray = Object.values(errors);

    // Convierte el objeto errors en un array para medir su longitud
    if (errorsArray.length === 0) {
      alert("Datos completos");
      // Restablece los estados a su estado original
      document.getElementById('myForm').reset();
    } else {
      alert("Debe llenar todos los campos");
    }
  }

  return (
    <div>
      <h2>Crear Formulario</h2>
      <form id="myForm" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input 
          name="name"
          placeholder='Escribe tu nombre...' 
          type="text"
          value={inputs.name} 
          onChange={handleChange}
          className={errors.name && 'warning'}
        />
        <p className='danger'>{errors.name}</p>
        <label>Correo Electrónico:</label>
        <input 
          name="email"
          placeholder='Escribe tu email...' 
          type="text" 
          value={inputs.email} 
          onChange={handleChange}
          className={errors.email && 'warning'}
        />
        <p className='danger'>{errors.email}</p>
        <label>Mensaje:</label>
        <input 
          name="message"
          placeholder='Escribe tu mensaje...' 
          type="text" 
          value={inputs.message} 
          onChange={handleChange}
          className={errors.message && 'warning'}
        />
        <p className='danger'>{errors.message}</p>
        <button type='submit'>enviar</button>
      </form>
    </div>
    )
}
