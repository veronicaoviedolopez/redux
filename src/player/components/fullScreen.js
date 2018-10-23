import React from 'react';
import {FullScreenIcon} from '../../icons/components/figure';
import './fullScreen.css';

const FullScreen = (props) =>
    <div
     className="FullScreen" 
     onClick={props.handleClickFullScreen}>
        <FullScreenIcon color="white" size={25} />
    </div>
    
export default FullScreen