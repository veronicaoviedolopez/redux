import React from 'react';

const Icon = (props)=>{
    const {
        color,
        size,
    } = props
    return(
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill={color}
        >
        <title>play3</title>>
            {props.children}
        </svg>
    )
}
export default Icon;