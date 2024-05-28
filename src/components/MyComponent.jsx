import React from "react";

export const MyComponent = () => {
  const name = "Inés";
  const repository = "https://github.com/inesmariao/component-practice";

  const student = {
    name: "Esteban",
    lastName: "Camacho",
    mobile: "322 427 2503",
    linkedinProfile: "https://www.linkedin.com/in/estebancoding",
  };

  console.log(student);

  return (
    <div>
      <hr />
      <h2>Temas Vistos de React</h2>
      <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados - Hooks</li>
        <li>Comunicación</li>
      </ul>
      <hr />
      <h2>Datos del Docente</h2>
      <p>Nombre: {name}</p>
      <p>Repositorio:</p>
      <p>
        <a href={repository} target="_blank" rel="noopener noreferrer">
          {repository}
        </a>
      </p>
      <hr />
      <h2>Datos del estudiante</h2>
      <p>Nombre: {student.name}</p>
      <p>Apellido: {student.lastName}</p>
      <p>Celular: {student.mobile}</p>
      <p>Perfil de LinkedIn:</p>
      <p>
        <a
          href={student.linkedinProfile}
          target="_blank"
          rel="noopener noreferrer"
        >
          {student.linkedinProfile}
        </a>
      </p>
    </div>
  );
};
