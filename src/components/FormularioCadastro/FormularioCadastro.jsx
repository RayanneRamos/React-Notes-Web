import React, { Component } from 'react';
import './style.css';

class FormularioCadastro extends Component {
  
  constructor(props) {
    super(props);
    this.titulo = '';
    this.texto = '';
    this.categoria = 'Sem Categoria';
    this.state = { categorias: [] };
    this.novasCategorias = this.novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this.novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this.novasCategorias);;
  }

  novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className='form-cadastro' onSubmit={this.criarNota.bind(this)}>
        <select onChange={this.handleMudancaCategoria.bind(this)} className='form-cadastro-input'>
          <option>Sem Categoria</option>
          {this.state.categorias.map((categoria, key) => {
            return <option key={key}>{categoria}</option>
          })}
        </select>
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