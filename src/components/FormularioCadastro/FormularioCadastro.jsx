import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
  
  constructor() {
    super();
    this.titulo = '';
  }

  handleMudancaTitulo(evento) {
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }
  
  
  render() {
    return (
      <form className='form-cadastro'>
        <input 
          type='text' 
          placeholder='Título' 
          className='form-cadastro-input'
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea 
          placeholder='Escreva sua nota' 
          rows={15} 
          className='form-cadastro-input' />
        <button 
          className='form-cadastro-input form-cadastro-submit'
        >
          Criar Nota
        </button>
      </form>
    );
  } 
}

export default FormularioCadastro;