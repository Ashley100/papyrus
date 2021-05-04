import App from 'next/app';
import React, { Component } from 'react';

import Main from "../client/components/main";
import {Theme, getThemeMode} from "../client/components/theme";
import {GlobalStyles} from "../client/components/ui/globals";
import {authAPI} from "../client/api/auth";

// styles
import '../public/globals.css'
import WithAuth from "../client/components/authProvider";


class MyApp extends App {

    constructor() {
        super();
    }

    static async getInitialProps ({Component, ctx, pathname, ...props}) {

        let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        pageProps.theme = getThemeMode(ctx);



        const userLogged = await authAPI.verifyUser(ctx.req);

        pageProps.store = {
            user: {
                logged: userLogged?.status || false
            }
        };

        return {pageProps: pageProps};
    }

    render() {

        const {Component, pageProps} = this.props;

        return (
            <WithAuth {...pageProps}>
                <Theme mode={pageProps.theme}>
                    <GlobalStyles/>
                    <Main {...pageProps}>
                        <Component {...pageProps} />
                    </Main>
                </Theme>
            </WithAuth>
        )
    }
}

export default MyApp;