import React, { Component } from 'react';
import './style.css';

class ListaDeCategoria extends Component {

  handleEventoInput(evento) {
    if(evento.key === 'Enter') {
      const valorCategoria = evento.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return(
      <>
        <section className='lista-categoria'>
          <ul className='lista-categoria-lista'>
            {this.props.categorias.map((categoria, index) => {
              return <li key={index} className='lista-categoria-item'>{categoria}</li>
            })}
          </ul>
          <input 
            className='lista-categoria-input' 
            type='text' 
            placeholder='Adicionar categoria'
            onKeyUp={this.handleEventoInput.bind(this)}
          />
        </section>
      </>
    );
  }
}

export default ListaDeCategoria;