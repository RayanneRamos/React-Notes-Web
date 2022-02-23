import React, { Component } from 'react';
import './style.css';

class ListaDeCategoria extends Component {
  render() {
    return(
      <>
        <section className='lista-categoria'>
          <ul className='lista-categoria-lista'>
            <li className='lista-categoria-item'>Categorias</li>
            <li className='lista-categoria-item'>Categorias</li>
            <li className='lista-categoria-item'>Categorias</li>
            <li className='lista-categoria-item'>Categorias</li>
          </ul>
          <input className='lista-categoria-input' type='text' />
        </section>
      </>
    );
  }
}

export default ListaDeCategoria;