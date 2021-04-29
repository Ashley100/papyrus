import React, {FC, EventHandler, InputHTMLAttributes} from "react";

interface Input extends InputHTMLAttributes<HTMLInputElement>{

}
export const Input:FC<Input> = ({ ...props }) => {
    return <input {...props} />
}