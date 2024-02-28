import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
    carro: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    },
    carroContainer: {
        position: 'relative', // Asegúrate de que el contenedor del carro tenga posición relativa para posicionar correctamente la burbuja.
    },
};

class Carro extends Component {
    render() {
        const { carro , esCarroVisible, mostrarCarro} = this.props;
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
        return (
            <div style={styles.carroContainer}>
                {cantidad !== 0 && (
                    <span style={styles.bubble}>
                        <BubbleAlert value={cantidad} />
                    </span>
                )}
                <button onClick={mostrarCarro} style={styles.carro} aria-label="Carrito de compras">
                    Carro
                </button>
                {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
            </div>
        );
    }
}

export default Carro;
