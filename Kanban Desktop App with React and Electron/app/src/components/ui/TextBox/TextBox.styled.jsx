import { styled } from "styled-components"

export const StyledTextBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 480px;
    color: black;
    border-radius: 4px;
    padding: 10px;
    margin: 5px;
    font-size: 18px;
    cursor: pointer;

    @media screen and (max-width: 768px){
        min-width: 100%;
        margin: 0;
        margin-bottom: 10px;
    }
`

export const StyledTextBoxTodo = styled(StyledTextBox)`
    background: linear-gradient(to right, rgba(242, 112, 156), rgb(255, 148, 114));
    &:hover{
        background: linear-gradient(to right, rgba(242, 112, 156, 0.8), rgba(255, 148, 114, 0.8));
    }
`
export const StyledTextBoxInProgress = styled(StyledTextBox)`
    background: radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%);
    &:hover{
        background: radial-gradient(circle at 10% 20%, rgba(255, 200, 124, 0.8) 0%, rgba(252, 251, 121, 0.8) 90%);
    }

`
export const StyledTextBoxDone = styled(StyledTextBox)`
    background: linear-gradient(109.6deg, rgb(9, 154, 151) 11.2%, rgb(21, 205, 168) 91.1%);
    &:hover{
        background: linear-gradient(109.6deg, rgba(9, 154, 151, 0.8) 11.2%, rgb(21, 205, 168, 0.8) 91.1%);
    }
`