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
            criarNota={this.notas.adicionarNotas.bind(this.notas)} 
            categorias={this.categorias} 
          />
          <main className='conteudo-principal'>
            <ListaDeCategorias 
              categorias={this.categorias} 
              adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} 
            />
            <ListaDeNotas 
              apagarNota={this.notas.apagarNota.bind(this.notas)} 
              notas={this.notas} 
            />
          </main>
        </section>
      </>
    );
  }
}

export default App;
