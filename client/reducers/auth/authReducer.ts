import {Action, Reducer} from "@reduxjs/toolkit"
import {CHECK_USER_AUTH} from "../../types";

const initialState = {
    test: "test text"
}
export const authReducer = (state = initialState, action:Action) => {
    switch (action.type) {
        case CHECK_USER_AUTH: {
            return {
                ...state,
                auth: false
            }
        }
        default: return state
    }
}