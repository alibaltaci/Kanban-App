import Typography from "../Typography/Typography"
import { StyledButtonPrimary, StyledButtonDanger, StyledButtonSuccess } from "./Button.styled" 

export default function Button({handle, variant, text, ...props}){

    if(variant === "success"){
        return(
            <StyledButtonSuccess {...props} >
                <Typography text={text} {...props} />
            </StyledButtonSuccess>
        )
    }else if(variant === "danger"){
        return(
           <StyledButtonDanger {...props} >
                <Typography text={text} {...props} />
           </StyledButtonDanger> 
        )
    }else{
        return(
            <StyledButtonPrimary {...props}>
                <Typography text={text} {...props} />
            </StyledButtonPrimary>
        )
    }
}