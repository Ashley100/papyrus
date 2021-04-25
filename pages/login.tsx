import React, {FC, useEffect, useState, EventHandler} from "react";
import axios from "axios";
import {api} from "../client/api/instanse";

const LoginPage = ( props ) => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    console.log("props", props);

    const submitHandler = async (e) => {

        e.preventDefault();

        try {

            let result = await axios.post('/api/auth/login', {

                email: userEmail,
                password: userPassword

            });

            console.log(result);

        } catch (e) {
            console.error(e);
        }

    }

    useEffect(() => {



    }, []);

    return (
        <form onSubmit={submitHandler}>

            <div className="container">
                <label htmlFor="uname"><b>Username</b></label>
                <input
                    onInput={(e) => setUserEmail(e.currentTarget.value)}
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    required />

                <label htmlFor="psw"><b>Password</b></label>
                <input
                    onInput={(e) => setUserPassword(e.currentTarget.value)}
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required />

                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" name="remember" /> Remember me
                </label>
            </div>

            <div className="container">
                <button type="button" onClick={submitHandler} className="cancelbtn">Submit</button>
            </div>
        </form>
    )

}

LoginPage.getInitialProps = async ({ req, res }) => {

    try {

        if(req) {
            const response = await api(req).get('auth/islogged');
            return response.data
        } else {
            const response = await api(null).get('auth/islogged');
            return response.data
        }

    } catch (error) {
        return { error: error.message }
    }

}

export default LoginPage;

