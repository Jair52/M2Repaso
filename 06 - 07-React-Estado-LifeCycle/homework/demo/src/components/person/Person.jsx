import React from "react";

const Person = ({name, lastname}) => {
    const [person, setPerson] = React.useState({
        name, 
        lastname,
        active: true
    })

    const handleClick = () => {
        if(person.active){
            setPerson({
                name: 'Juan', 
                lastname: 'Castro', 
                active: false
            })
        }else{
            setPerson({
                name,
                lastname,
                active: true
            })
        }
    }
    return(
        <div>
            <h1>Este es Person</h1>
            <p>{person.name}</p>
            <p>{person.lastname}</p>

            <button onClick={handleClick}>Cambiar a person</button>
        </div>
    )
}

export default Person;