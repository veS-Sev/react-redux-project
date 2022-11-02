import React from "react";

export const CustomButton=({name, id, disabled, onClick,style})=>{
    return(
        <button
        id={id}
        disabled={disabled}
        onClick={onClick}
        style={style}
        >{name}</button>

    )
}