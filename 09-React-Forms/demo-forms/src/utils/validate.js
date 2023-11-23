export default function validate(input){
    const emailRegExp = /\S+@\S+\.\S/;
    const errors = {};
    
       //*name
       if(!input.name.length) errors.name = "Debe ingresar un nombre";
        else{
            if(input.name.length < 3) errors.name = "Debe tener al menos 3 caracteres";
            if(input.name.length > 15) errors.name = "Debe tener menos de 15 caracteres";
        }

       //*email
       if(!input.email.length) errors.email = "Debe ingresar un email";
        else{
            if(!emailRegExp.test(input.email)) errors.email = "Debe ingresar un mail correcto";
        }

       //*password
       if(!input.password.length) errors.password = "Debe ingresar un password";
       else{
        if(input.password.length < 4) errors.password = "Debe tener al menos 4 caracteres";
        if(input.password.length < 6) errors.password = "Debe tener menos de 6 caracteres";
        }
    return errors;
}

console.log(validate({name:"", email:"", password:""}))