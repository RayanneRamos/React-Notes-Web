import React from 'react';
import CardNota from './CardNota';

function ListaDeNotas() {
  return(
    <>
      <ul>
        <li>
          <CardNota />
        </li>
      </ul>
      <ul>
        <li>
          <CardNota />
        </li>
      </ul>
      <ul>
        <li>
          <CardNota />
        </li>
      </ul>
    </>
  );
}

export default ListaDeNotas;