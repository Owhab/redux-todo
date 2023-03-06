import {initialState} from "./initialState";
import {ADDED, COLORSELECTED, TOGGLEDD} from "./actionTypes";



const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;

}


const reducer = (state = initialState, action) => {

    switch (action.type){
        case ADDED:
            return[
                ...state,
                {
                    id:nextTodoId(state)
                }
            ]

        case TOGGLEDD:
            return state.map(todo => {
                if(todo.id !== action.payload){
                    return todo;
                }

                return {
                    ...todo,
                    completed: !completed,
                }
            });

        case COLORSELECTED:
            const {todoId, color} = action.payload;
            return state.map(todo => {
                if(todo.id !== todoId){
                    return todo
                }
                return {
                    ...todo,
                    color: color,
                }
            })





    }

}