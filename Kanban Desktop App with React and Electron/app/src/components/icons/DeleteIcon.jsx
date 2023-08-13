import { styled } from "styled-components"

export default  function DeleteIcon(){
    return(
        <StyledEditIcon>
            <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 3L15.5 4H19V6H5V4H8.5L9.5 3H14.5ZM8 21C6.9 21 6 20.1 6 19V7H18V19C18 20.1 17.1 21 16 21H8ZM12 12.59L14.12 10.47L15.53 11.88L13.41 14L15.53 16.12L14.12 17.53L12 15.41L9.88 17.53L8.47 16.12L10.59 14L8.46 11.88L9.87 10.47L12 12.59Z" 
                fill="#000000"></path> 
                </g>
            </svg>
        </StyledEditIcon>
    )
}

const StyledEditIcon = styled.div`
    display: block;
    max-width: 1.rem;
    min-width: 1.7rem;  
    transition: transform 0.4s;
    &:hover{
        svg path {
            fill: #dc2f2f;
        };
        transform: scale(1.6);
    }
`
