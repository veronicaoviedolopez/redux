import React from 'react';
import logo from '../../../images/logo.png';
import './related-layout.css'

const RelatedLayout =(props)=>
{
    return(
        <div className="Related">
            <img src={logo} alt="" width={250}></img>
        </div>
    )
}

export default RelatedLayout;