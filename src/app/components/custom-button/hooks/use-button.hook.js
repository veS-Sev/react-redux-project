import { useState, useEffect } from "react";


export const useButton = (result, value) => {
    const [disabledAdd, changeDisabledAdd] = useState(false)
    const [disabledGet, changeDisabledGet] = useState(false)
    useEffect(() => {
        const numberValidator = str => /^\d+$/.test(str)
        if (numberValidator(value) && Number(value) > 0) {
            changeDisabledAdd(false)
        } else { changeDisabledAdd(true) }
        if (result > value && Boolean(value) === true) {
            changeDisabledGet(false)
        } else { changeDisabledGet(true) }
    }, [value])
    return {
        disabledAdd,
        disabledGet
    }
}