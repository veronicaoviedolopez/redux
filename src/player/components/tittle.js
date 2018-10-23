import React from 'react';
import './tittle.css';
const Tittle =(props)=> {
    return(
        <div className="Title">
            <h2>{props.tittle}</h2>
        </div>
    )
}

export default Tittle;