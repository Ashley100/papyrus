import React from "react";
import {api} from "../client/api/instanse";
import Router from "next/router"

const Logout = (props):any => {
    return (
        <div>
            asd
        </div>
    )
};

Logout.getInitialProps = async ({req, res}) => {
    if (res && req) {

        try {
            await api(req).get('/api/auth/logout');
            // res.writeHead(302, { Location: '/login' }).end()

        } catch (e) {
            // res.writeHead(302, { Location: '/login' }).end()
            console.log(e);
        }

    } else {
        await api(null).get('/api/auth/logout');
        await Router.push("/login");
    }

    return { data: null }
}

export default Logout;