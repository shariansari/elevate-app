
import {  SET_CHILD_SERVICE_DATA, SET_SELECTED_SERVICE } from '../ActionName/ActionName'

const initialState = {
    selectedService: {},
    childServices: {},
    pagination: { page: 1, limit: 10, search: {} },
    timestamp: Date.now()
}

const ServiceReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SELECTED_SERVICE:
            return ({ ...state, selectedService: action.value, timestamp: Date.now() })
        case SET_CHILD_SERVICE_DATA:
            return ({ ...state, childServices: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default ServiceReducer;