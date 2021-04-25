import App from 'next/app';
import React, { Component } from 'react';

import Main from "../client/components/main";
import '../styles/globals.css'

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        return (
            <Main>
                <Component {...pageProps} />
            </Main>
        )
    }
}
