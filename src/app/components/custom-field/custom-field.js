export const CustomField=({name,id, disabled, onClick,style,result})=>{
    return(

        <div
        id={id}
        disabled={disabled}
        onClick={onClick}
        style={style}
                >{result}</div>

    )
}