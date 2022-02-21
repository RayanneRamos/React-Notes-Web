import React from 'react';
import CardNota from './CardNota';

function ListaDeNotas() {
  return(
    <>
      <ul>
        {Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria, index) => {
          return(
            <li key={index}>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListaDeNotas;