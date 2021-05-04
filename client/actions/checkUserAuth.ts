import {ActionCreator} from "@reduxjs/toolkit";
import {CHECK_USER_AUTH} from "../types";
import axios from "axios";

// types


// actions
export const checkUserAuth:ActionCreator<void> = () => {
    return {
        type: CHECK_USER_AUTH
    }
}
// Thunk
export const fetchUserAuth = (token) => async (dispatch) => {
    const response = await axios.get('/posts', {
        params: {
            token: token
        }
    });
    dispatch({
        type: 'FETCH_POSTS',
        payload: CHECK_USER_AUTH
    });
};