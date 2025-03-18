import { SET_CHILD_SERVICE_DATA, SET_SELECTED_SERVICE } from "../ActionName/ActionName"

export const setChildServiceData = (data) => {
    return {
        type: SET_CHILD_SERVICE_DATA,
        value: data
    }
}

export const setSelectedService = (data) =>{
    return {
        type: SET_SELECTED_SERVICE,
        value: data
    }
}