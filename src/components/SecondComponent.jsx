import React from "react";

export const SecondComponent = () => {
  const books = [
    "Harry Potter y la piedra filosofal",
    "Harry Potter y la cámara secreta",
    "Harry Potter y el prisionero de Azkaban",
    "Harry Potter y el cáliz de fuego",
    "Harry Potter y la Orden del Fénix",
    "Harry Potter y el misterio del príncipe",
    "Harry Potter y las Reliquias de la Muerte",
  ];

  return (
    <div className="list-container">
      <hr />
      <h1>Creación de Componentes en React</h1>
      <h2 className="list-title">Listado de libros</h2>
      <ul className="list">
        {books.length >= 1
          ? books.map((book, index) => (
              <li key={index} className="list-item">
                {book}
              </li>
            ))
          : "No existen libros."}
      </ul>
    </div>
  );
};
