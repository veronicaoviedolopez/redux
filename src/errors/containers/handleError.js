import React, {Component} from 'react';
import RegularError from '../components/regularError.js'

export default class HandleError extends Component{
    state={
        handleError:false,
    }
    componentDidCatch(error, info){
        //envia este error a un servicio como Sentry
        this.setState(
            {
                handleError:true,
            }
        )
    }
    render(){
        if(this.state.handleError){
            return(
               <RegularError/>
            )
        }
        return(
            this.props.children
        )
    }
}