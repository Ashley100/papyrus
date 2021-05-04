import React from "react";
import Header from "./header/header";

export default function Main (props) {
    const { children } = props
    return (
        <div className='layout'>
            <Header store={props.store}/>
            {children}
        </div>
    );
}