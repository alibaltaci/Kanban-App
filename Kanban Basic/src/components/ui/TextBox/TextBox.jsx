import { StyledTextBoxDone, StyledTextBoxInProgress, StyledTextBoxTodo } from "./TextBox.styled";

export default function TextBox({type, children, ...props}){

    if( type === "todo"){
        return(
            <StyledTextBoxTodo {...props}>
              {children}
            </StyledTextBoxTodo>
        )
    }

    else if( type === "inProgress" ){
        return(
            <StyledTextBoxInProgress {...props}>
              {children}
            </StyledTextBoxInProgress>
        )
    }

    else if( type === "done" ){
        return(
            <StyledTextBoxDone {...props}>
              {children}
            </StyledTextBoxDone>
        )
    }
    
}