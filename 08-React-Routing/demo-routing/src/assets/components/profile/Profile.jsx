import { useEffect, useState } from "react";
import axios from "axios";
import Person from "../person/Person";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
      axios("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        setUsers([...users, ...data])
      })
      .catch(() => {
        console.log('se rompio');
      });
      return () => {
        setUsers([])
    };
    }, [])
    
    const {id} = useParams();

    const location = useLocation();
    console.log(location); //para ver la ruta de url

    const navigate = useNavigate();
    console.log(navigate); //es una funcion 

    const usersFiltered = users.find((user) => {
        return user.id === Number(id);
    })

  return (
    <div>
        <h2>Este es el perfil</h2>
        <p>Aca pondriamos mucha data</p>
        {/* {
            users?.map((user) => {
                return(
                    <Person 
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        city={user.address?.city}
                    />
                )
            })
        } */}

        <Person 
            id={id}
            name={usersFiltered?.name}
            email={usersFiltered?.email}
            city={usersFiltered?.address.city}
        />

    </div>
  )
}

export default Profile;