import React from "react";

export const CustomInput=({
    id,
    placeholder,
    onChange,
    value,
    name,
  }
  )=>{
    return(
        <input
        className="custom-input"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
  ></input>
    )
}