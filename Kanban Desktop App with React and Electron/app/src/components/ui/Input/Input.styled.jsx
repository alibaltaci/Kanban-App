import { styled } from "styled-components";

export const StyledInputElement = styled.input`
    outline: none;
    height: 2.7rem;
    width: 20rem;
    border-radius: 5px;
    border: 2px solid gray;
    padding: 5px 15px;
    font-size: 16px;
    &:focus{
        border: 2px solid #ffb5b5;
    }
    &:hover{
        background-color: rgba(0, 158, 96, 0.1);
        color: white;
    }
`