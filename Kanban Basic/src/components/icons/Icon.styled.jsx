import { styled } from "styled-components";

export const StyledSocialIcon = styled.div`
    // display: block;
    max-width: 4rem;
    min-width: 4rem;  
    transition: transform 0.4s;
    &:hover{
        svg path {
            fill: #668ba4;
        };
        transform: scale(1.4);
    }
`

export const StyledSocialIconContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin: 1.5rem auto 3rem;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 768px){
        margin: 1rem 2rem 2rem;
    }
`