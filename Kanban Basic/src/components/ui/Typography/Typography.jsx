import { StyledH1, StyledH2, StyledH3, StyledParagraph, StyledSpan } from "./Typography.styled";

export default function Typography({text, children, elementType, ...props}){

    const WrapperComponent = 
    elementType === "span"
        ? StyledSpan
        : elementType === "h1"
        ? StyledH1
        : elementType === "h2"
        ? StyledH2 
        : elementType === "h3"
        ? StyledH3
        : StyledParagraph
    return(
        <WrapperComponent {...props} >
            {text}
            {children}            
        </WrapperComponent>
    )
    
    // if(elementType === "span"){
    //     return(
    //         <StyledSpan  {...props}>
    //             {text}
    //             {children}
    //         </StyledSpan>
    //     )
    // }
    // else if(elementType === "h1"){
    //     return(
    //         <StyledH1 {...props}>
    //             {text}
    //             {children}
    //         </StyledH1>
    //     )
    // }
    // else if(elementType === "h2"){
    //     return(
    //         <StyledH2 {...props}>
    //             {text}
    //             {children}
    //         </StyledH2>
    //     )
    // }
    // else if(elementType === "h3"){
    //     return(
    //         <StyledH3 {...props}>
    //             {text}
    //             {children}
    //         </StyledH3>
    //     )
    // }
    // else{
    //     return(
    //         <StyledParagraph {...props}>
    //             {text}
    //             {children}
    //         </StyledParagraph>
    //     )
    // }
}