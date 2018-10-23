import React, {Component} from 'react';

class Button extends Component{
    constructor(props){
        super(props);
        //Estado del componente
        this.state = {
            count: 0
        };
        //Enlazamos el manejador de eventos con el componente.
        this.handleClick = this.handleClick.bind(this);
    }
    //Manejador de evento de nuestro boton.
    handleClick(e){  //prevState hace referencia al estado que estaba justo antes del setState, sirve para cambiar estao en base al estado anterior
        e.preventDefault();
        this.setState((prevState) => ({
            count:(prevState.count + 1)
        }));
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    {this.state.count}
                </button>
            </div>
        );
    };
};

export default Button;