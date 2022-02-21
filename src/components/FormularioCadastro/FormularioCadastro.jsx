import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
  render() {
    return (
      <form className='form-cadastro'>
        <input 
          type='text' 
          placeholder='Título' 
          className='form-cadastro-input'
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