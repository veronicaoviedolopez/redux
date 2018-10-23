import React from 'react';
import Playlist from '../../playlist/components/playlist'
const Category=(props)=>{
    return(
        <div className="Category">
            <p className="Category-description">{props.description}</p>
            <h2 className="Category-title">{props.tittle}</h2>
            <Playlist 
                playlist = {props.playlist}
                handleOpenModal={props.handleOpenModal}
            />   
        </div>
    )
}

export default Category;