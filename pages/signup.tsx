import React, { FC, ReactChildren } from "react";
import {GetServerSideProps, NextPage, NextPageContext} from "next";

interface Signup {
    login?: string
    password?: string
    theme?: string
}

const Signup:NextPage<Signup> = ({login, password, theme}) => {

    console.log(login, password, theme);

    return (
        <>
            asd
        </>
    )
}

Signup.getInitialProps = async (context:NextPageContext) => {


    return {
        login: "asd@asd",
        password: "passs123123"
    }
}

export default Signup