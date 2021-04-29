import React, {FC, EventHandler, InputHTMLAttributes} from "react";
import styled from 'styled-components';
import {Input} from "./input";



const Label = styled.label`
  ${props => console.log(props)}
  display: flex;
  width: max-content;
  align-items: center;
  user-select: none;
  cursor: pointer;
  color: ${props => props.theme.colors.dark2};
  
  .label__item { display: flex; align-items: center; }
  
  input[type=checkbox]~.label__item .custom__checkbox {
    position: relative;
    width: 36px;
    height: 24px;
    box-sizing: border-box;
    transition: .2s ease-in-out;
    border-radius: 24px;
    background: ${props => props.theme.colors.gray_4};
    flex-shrink: 0;
    margin-right: 8px;
  }
  input[type=checkbox]:checked~.label__item .custom__checkbox {
    background-color: ${props => props.theme.colors.red_2};
  }
  input[type=checkbox]~.label__item .custom__checkbox:after {
    content: "";
    position: absolute;
    top: 4px;
    left: 5px;
    width: 16px;
    height: 16px;
    display: block;
    background: #fff;
    box-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
    border-radius: 24px;
    transition: .1s ease-in-out;
    flex-shrink: 0;
  }
  input[type=checkbox]:checked~.label__item .custom__checkbox:after {
    left: calc(100% - 21px);
  }
`;

export const Checkbox:FC<InputHTMLAttributes<any>> = ({ children, name, checked }) => {
    return (
        <Label>
            <Input
                type="checkbox"
                name={name}
                checked={checked}
                hidden={true}
            />
            <div className="label__item">
                <span className="custom__checkbox"></span>
                <p>{children}</p>
            </div>
        </Label>
    )
}