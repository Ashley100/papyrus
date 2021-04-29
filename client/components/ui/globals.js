import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    abbr,address,article,aside,audio,b,blockquote,body,canvas,caption,cite,code,dd,del,details,dfn,div,dl,dt,em,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,p,pre,q,samp,section,small,span,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,ul,var,video {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        box-sizing: border-box
    }
    
    body {
        line-height: 1;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }


`;