import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
  
  constructor(props) {
    super(props);
    this.titulo = '';
    this.texto = '';
  }

  handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }
  
  render() {
    return (
      <form className='form-cadastro' onSubmit={this.criarNota.bind(this)}>
        <input 
          type='text' 
          placeholder='Título' 
          className='form-cadastro-input'
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea 
          placeholder='Escreva sua nota' 
          rows={15} 
          className='form-cadastro-input' 
          onChange={this.handleMudancaTexto.bind(this)}
        />
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