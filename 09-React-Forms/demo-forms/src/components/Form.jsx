import { useState } from 'react'; 
import validate from '../utils/validate';

export default function Form({ data }){
    //* props = { data: {name, title} }

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        name: "Debe ingresar un nombre"
    });
    //* Evaluamos => input => {name:, email:, password:}
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        // console.log("value", value);
        // console.log("name", name);
        setInput({
            ...input,
            [name]: value,
        });
        setErrors(
            validate({
                ...input,
                [name]: value,
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviado...");
    }

  return (
    <div>
        <h1>{data.name} - {data.title}</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input 
                key="name"
                id="name"
                name="name"
                type="text" 
                value={input.name}
                placeholder='Ingrese su nombre'
                onChange={handleChange}
            />
            <p style={{color: "coral"}}>{ errors.name ? errors.name : null }</p>
            <br />

            <label>Email: </label>
            <input 
                key="email"
                id="email"
                name="email"
                type="email" 
                value={input.email}
                placeholder='Ingrese su email'
                onChange={handleChange}
            />
            <p style={{color: "coral"}}>{ errors.email && errors.email }</p>
            <br />

            <label>Password </label>
            <input 
                key="password"
                id="password"
                name="password"
                type="password" 
                value={input.password}
                placeholder='Ingrese su password'
                onChange={handleChange}
            />
            <p style={{color: "coral"}}>{ errors.password && errors.password }</p>
            <hr />

            <button 
                typeof='submit'
                disabled={errors.name || errors.email || errors.password}
            >Enviar</button>
        </form>
    </div>
  )
}
