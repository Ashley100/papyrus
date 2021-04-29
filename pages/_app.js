import App, {AppInitialProps} from 'next/app';
import React, { Component } from 'react';
import cookie from "cookie";

import Main from "../client/components/main";
import '../public/globals.css'
import Theme from "../client/components/theme";
import {GlobalStyles} from "../client/components/ui/globals";

function MyApp (props) {

    const { Component, pageProps } = props

    console.log("pageProps", pageProps);
    return (
        <Theme mode={pageProps.theme}>
            <GlobalStyles />
            <Main>
                <Component {...pageProps} />
            </Main>
        </Theme>
    )
}

MyApp.getInitialProps = async ({Component, ctx, reduxStore}) => {

    let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    pageProps.theme = "light";

    let cookies;

    if (ctx.req) {
        cookies = cookie.parse(ctx.req.headers && ctx.req.headers.cookie && ctx.req.headers.cookie || "");
    } else {
        cookies = cookie.parse(document.cookie);
    }
    cookies.theme
        ? pageProps.theme = cookies.theme
        : pageProps.theme = "light"

    return {pageProps: pageProps};

}

export default MyApp;