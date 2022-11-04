import { useState } from "react";


export const useInput = (startValue) => {
    const [value, setValue] = useState(startValue);
    const handleChange = (event) => {
            setValue(event.target.value)
        }
        console.log('value', value)
        return {
            value,
            setValue,
            handleChange,
        }
    }