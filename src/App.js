import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import './App.css';
import ListaDeCategorias from './components/ListaDeCategoria/ListaDeCategoria';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas'; 


class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <>
        <section className='conteudo'>
          <FormularioCadastro 
            criarNota={this.notas.criarNota} 
            categorias={this.categorias.categorias} 
          />
          <main className='conteudo-principal'>
            <ListaDeCategorias 
              categorias={this.categorias.categorias} 
              adicionarCategoria={this.categorias.adicionarCategoria} 
            />
            <ListaDeNotas 
              apagarNota={this.notas.deletarNota} 
              notas={this.notas.notas} 
            />
          </main>
        </section>
      </>
    );
  }
}

export default App;
