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
}