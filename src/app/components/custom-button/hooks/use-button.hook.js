import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const useButton = (result, value) => {
    const dispatch = useDispatch();
    const { disableAdd, disableGet } = useSelector(state => state.disable)
    useEffect(() => {
        const numberValidator = str => /^\d+$/.test(str)
        if (numberValidator(value) && Number(value) > 0) {
            dispatch({ type: "DISABLE_ADD", payload: false })
        }
        else {
            dispatch({ type: "DISABLE_ADD", payload: true }
            )
        }
        if (result > value && Boolean(value) === true) {
            dispatch({ type: "DISABLE_GET", payload: false })
        } else { dispatch({ type: "DISABLE_GET", payload: true }) }
    }, [value])
    return {
        disableAdd,
        disableGet
    }
}