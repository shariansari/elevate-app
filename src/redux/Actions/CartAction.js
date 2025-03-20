import { SET_CART_FLAG } from "../ActionName/ActionName"

export const setCartFlag = (data) => {
    return {
        type: SET_CART_FLAG,
        value: data
    }
}

