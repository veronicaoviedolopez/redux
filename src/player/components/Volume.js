import React from 'react';
import {Volume} from '../../icons/components/figure'
import './Volumen.css';

const Volumen = props => {
    return(
        <button 
          className="Volume"
        >
        <div onClick= {props.handleMuteChange}>
            <Volume 
                size={25}
                color="white"
                
            />
        </div>
            <div className="Volume-range">
                <input 
                    type="range" 
                    min={0}
                    max={1}
                    step={0.05}
                    onChange={props.handleVolumeChange}
                />
            </div>   
        </button>
    )
}
       
export default Volumen;