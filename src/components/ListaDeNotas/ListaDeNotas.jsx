import React, { Component } from 'react';
import CardNota from '../CardNota/CardNota';
import './style.css';

class ListaDeNotas extends Component {

  constructor() {
    super();
    this.state = { notas: [] };
    this.novasNotas = this.novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this.novasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this.novasNotas);
  }

  novasNotas(notas) {
    this.setState({ ...this.state, notas });
  } 

  render() {
    return(
      <>
        <ul className='lista-notas'>
          {this.state.notas.map((nota, index) => {
            return(
              <li key={index} className='lista-notas-item'>
                <CardNota 
                  indece={index}
                  apagarNota={this.props.apagarNota}
                  titulo={nota.titulo} 
                  texto={nota.texto} 
                  categoria={nota.categoria} 
                />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  
}

export default ListaDeNotas;