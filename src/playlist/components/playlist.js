import React from 'react';
import Media from './media.js';
import './playlist.css';
//import Figure from '../../icons/components/figure';

function Playlist(props){
    //const {categories} = props.data;
    //console.log(props.data);
    return(
        <div className="Playlist">
            {props.playlist.map((item) =>{
                    return (
                        <Media 
                            {...item} 
                            key = {item.id}
                            openModal= {props.handleOpenModal}
                        />
                    )
                })
            }
        </div>
    );
}

export default Playlist;