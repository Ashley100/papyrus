import React, {FC, useEffect, useState, EventHandler} from "react";
import axios from "axios";
import {api} from "../client/api/instanse";
import {Input} from "../client/components/ui/input/input";
import {Checkbox} from "../client/components/ui/input/checkbox";
import {Href} from "../client/components/ui/tipografia/href";

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

            <Input
                name="name"
                type="text"
                placeholder="Name"
                onInput={(e) => console.log(e.currentTarget.value)} />

            <Checkbox>
                Я согласен с правилами <Href href="/">соглашение</Href> с правилами
            </Checkbox>

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

LoginPage.getInitialProps = async ({ req, res, ...props }) => {

    try {

        if(req) {
            const response = await api(req).get('/api/auth/islogged');
            return response.data
        } else {
            const response = await api(null).get('/api/auth/islogged');
            return response.data
        }

    } catch (error) {
        return { error: error.message }
    }

}

export default LoginPage;

