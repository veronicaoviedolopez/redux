// 1. Importar las librerias.react es la basica
import React, {Component} from 'react';
import { clearInterval } from 'timers';

// 2. declarar la clase , con la palabra reservada class en minusculas. y el nombre de la clase empieza con mayuscyulas
class Clock extends Component{
    // 3. declarar el constructor, que recibe los parametros props del padre React.Component
    constructor(props){
        // 4. con la palabra super, se instancia el padre (React.Component) y despues se instancia el estado incial de nuestra app
        // this.state es una referencia a un objeto que contiene todas las propiedades a las q les vamos a manejar estados.    
        super(props);
        this.state = {
            date: new Date()
        };
    }
    // 5. en el evento componentDidMount() actualizaremos el reloj como un temporizador.
    componentDidMount(){
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }
    // 6. en el evento componentWillUnmount() vamos a matar el proceso temporizador para liberar memoria.
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    // 7. renderizar el componente.
    render(){
        return(
            <div>
                <h1>Bienvenidos a mi Reloj</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;
