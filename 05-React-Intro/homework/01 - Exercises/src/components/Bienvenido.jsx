import React from "react";

const studentName = "Jair";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  const skillsListItems = techSkills.map((skill, index) => (
    <li key={index}>{skill}</li>
  ));
  return(
    <div>
      <h1>Hola probando</h1>
      <h3>{studentName}</h3>
      <ul>{skillsListItems}</ul>
    </div>
  );

}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
