import React from 'react';
import {Play, Pause} from '../../icons/components/figure';
import './play-pause.css';

const PlayPause =(props)=>
    <div >
        {
            props.pause ?
                <button 
                className="PlayPausebutton"
                onClick={props.handleClick}>
                    <Play size={25} color="white"/>
                </button>
            :
            <button 
                className="PlayPausebutton"
                onClick={props.handleClick}>
                    <Pause size={25} color="white"/>
                </button>
        }
    </div>

export default PlayPause;