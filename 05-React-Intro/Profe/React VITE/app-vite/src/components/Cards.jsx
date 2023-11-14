import React from "react";
import Card from "./Card";

export default function Cards({ users }) {
  console.log("---> ", users);
  return (
    <div>
      <h2>Lista de usuarios: </h2>
      {users &&
        users.map((user, index) => {
            //! Warning: Each child in a list should have a unique "key" prop.
          return <Card key={index} user={user}></Card>;
        })}
    </div>
  );
}
