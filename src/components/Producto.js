import React, { Component } from "react";
import Button from './Button';

const styles = {
    producto:{
        border: '1px solid #eee',
        boxShadow: '0 5px 5px #eee',
        width: '200px', // Ancho del producto
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '20px', // Margen inferior entre productos
    },
    img:{
        width: '100%',
    },
    contenedorProductos: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px', // Espacio entre productos
        justifyContent: 'center', // Centrar los productos horizontalmente
    }
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props;
        return(
            <div style={styles.producto}>
                <img style={styles.img} src={producto.img} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>{producto.precio}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto;
