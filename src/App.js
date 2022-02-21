import React from 'react';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import './App.css';

function App() {
  return (
    <>
      <section className='conteudo'>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    </>
  );
}

export default App;
