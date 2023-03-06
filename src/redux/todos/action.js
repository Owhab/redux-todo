import {ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLEDD} from "./actionTypes";
import {type} from "@testing-library/user-event/dist/type";


export const added = (todoText) => {
    return{
        type: ADDED,
        payload: todoText,
    }
}

export const toggled = (todoId) => {
    return {
        type: TOGGLEDD,
        payload: todoId
    }
}


export const colorSelected = (todoId, color) => {
    return{
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        }

    }
}

export const deleted = (todoId) => {
    return{
        type: DELETED,
        payload: todoId,
    }
}

export const allCompleted = () => {
    return{
        type: ALLCOMPLETED,
    }
}
export const clearCompleted = () => {
    return{
        type: CLEARCOMPLETED,
    }
}