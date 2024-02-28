import React, { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    productos: [
      {  nombre: 'Tomate', precio: 1500, img: '/productos/tomate.jpg' },
      {  nombre: 'Arbejas', precio: 2500, img: '/productos/arbejas.jpg' },
      { nombre: 'Lechuga', precio: 500, img: '/productos/lechuga.jpg' },
    ],
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    const productoExistenteIndex = carro.findIndex(item => item.nombre === producto.nombre);

    if (productoExistenteIndex !== -1) {
      const nuevoCarro = [...carro];
      nuevoCarro[productoExistenteIndex].cantidad += 1;
      this.setState({ carro: nuevoCarro });
    } else {
      this.setState({
        carro: [...carro, { ...producto, cantidad: 1 }]
      });
    }
  };
  mostrarCarro = () => {
    if(!this.state.carro.length){ // Si el carro está vacío, no se muestra
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  }
  render() {
    const { esCarroVisible } = this.state;
    return (
      <>
        <NavBar 
          carro={this.state.carro}
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </>
    );
  }
}

export default App;
