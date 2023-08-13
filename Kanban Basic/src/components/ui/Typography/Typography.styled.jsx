import { styled, css } from "styled-components"

export const sharedTextStyles = css`
    ${props =>
        props.paddingTop &&
        css`
            padding-top: ${props.paddigTop};
    `};
    ${props =>
        props.paddingBottom &&
        css`
            padding-bottom: ${props.paddigBottom};
    `};
    ${props =>
        props.padding &&
        css`
            padding: ${props.paddig};
    `};
    ${props =>
        props.textalign &&
        css`
            text-align: ${props.textalign};
    `};
    ${props =>
        props.margin &&
        css`
            margin: ${props.margin};
    `};
    ${props =>
        props.marginBottom &&
        css`
            margin-bottom: ${props.marginBottom};
    `};
    ${props =>
        props.marginTop &&
        css`
            margin-top: ${props.marginTop};
    `};
    ${props =>
        props.color &&
        css`
            color: ${props.color};
    `};
    ${props =>
        props.fontFamily === "open" 
        ?      
        css`
            font-family: 'Open Sans', sans-serif;;
        ` : 
        props.fontFamily === "vibe"
        ? 
        css`
            font-family: 'Great Vibes', cursive;
        `
        : 
        css`
            font-family: 'Roboto', sans-serif;
        ` 
    }; 
    min-height: 10px;
    word-wrap: break-word;
    
`;

// Element üzerinde özel stil atamaları yapılacağı zaman sıkıntı olabilir.
// Geliştirilebilir.

// const SharedTextStyledComponent = (tag) => {
//     styled(tag)`
//      ${ sharedTextStyles }
//     `
// }

export const StyledParagraph = styled.p`
    ${ sharedTextStyles }
`

export const StyledSpan = styled.span`
    ${ sharedTextStyles }
`

export const StyledH1 = styled.h1`
    ${ sharedTextStyles }
`

export const StyledH2 = styled.h2`
    ${ sharedTextStyles }
`

export const StyledH3 = styled.h3`
    ${ sharedTextStyles }
`