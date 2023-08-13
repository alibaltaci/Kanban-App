import styled, { css } from 'styled-components'

const StyledButton = styled.button`
    border: none;
    cursor:  pointer;
    border-radius: 4px;
    height: 2.7rem;
    width: 6rem;
    font-size: 16px;

    ${(props) => 
        props.hover &&
        css`
           &:hover{
                p{
                    color:${props.hover}; 
                }
           } 
        `
    }

    @media screen and (max-width: 768px) {
        width: 20rem;
    }

`

export const StyledButtonPrimary = styled(StyledButton)`
    background-color: #ffb5b5;
    border: 2px solid #ffb5b5;
    &:hover{
        background-color: rgba(0, 158, 96, 0.1);
        border: 2px solid #ffb5b5;
        color: #ffb5b5;
    }
`

export const StyledButtonSuccess = styled(StyledButton)`
     background-color: green;
     border: 2px solid green;

     &:hover{
        background-color: rgba(0, 158, 96, 0.1);
        border: 2px solid green;
        // color: green;
     }
`

export const StyledButtonDanger = styled(StyledButton)`
     background-color: red;
     border: 2px solid red;

     &:hover{
        background-color: rgba(0, 158, 96, 0.1);
        border: 2px solid red;
        color: red;
     }
     
`