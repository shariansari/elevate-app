
import {  SET_CART_FLAG, SET_CHILD_SERVICE_DATA, SET_SELECTED_SERVICE } from '../ActionName/ActionName'

const initialState = {
    showCartBar: false,
    timestamp: Date.now()
}

const CartReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_CART_FLAG:
            return ({ ...state, showCartBar: action.value, timestamp: Date.now() })

        default:
            return state;
    }
}

export default CartReducer;