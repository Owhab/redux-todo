import initialState from "./initialState";
import {STATUSCHANGED} from "./actionTypes";

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case STATUSCHANGED:
            return{
                ...state,
                status: action.payload
            }

    }

}