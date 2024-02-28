import { Component } from "react";

const styles= {
    button:{
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }

}

class Button extends Component {
    render() {
        return(
            <button {...this.props} style={styles.button}/>//pasa todas las propiedades que le llegan a este componente
        )
    }
}

export default Button;