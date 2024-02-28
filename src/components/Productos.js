import { Component } from "react";
import Producto from './Producto';

const styles={
    productos:{
        display: 'flex',//para manipular
        flexDirection: 'row',//para que se vea de izquierda a derecha
        justifyContent: 'space-between',//para que se vea separado
    }
}

class Productos extends Component {
    render() {
        const {productos, agregarAlCarro} = this.props;
        return(
            <div style={styles.productos}>
                {productos.map(producto => 
                <Producto
                    agregarAlCarro={agregarAlCarro}
                    key={producto.id}
                    producto={producto}
                />
                )}
            </div>
        )        
    }
}

export default Productos;