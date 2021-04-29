import React, {FC, LinkHTMLAttributes} from "react";
import styled from "styled-components";


const Link = styled.a`
    color: ${props => props.theme.colors.blue_1};
    &:hover {
        color: ${props => props.theme.colors.blue_2};
    }
`;

export const Href:FC<LinkHTMLAttributes<any>> = ({children, href}) => {
    return (
        <Link href={href}>{children}</Link>
    )
}