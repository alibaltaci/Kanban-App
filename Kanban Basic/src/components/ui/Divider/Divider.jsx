import { styled } from "styled-components";

export default function Divider(props){
    return(
        <StyledDiv {...props}/>
    )
}

const StyledDiv = styled.div`
    border-top:  ${ props => `${props.thickness || "1px"} ${props.border || "solid"} ${props.color}`};
    margin-bottom: 1rem;
`