import React from 'react';
import CardNota from '../CardNota/CardNota';
import './style.css';

function ListaDeNotas() {
  return(
    <>
      <ul className='lista-notas'>
        {Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria, index) => {
          return(
            <li key={index} className='lista-notas-item'>
              <CardNota />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListaDeNotas;