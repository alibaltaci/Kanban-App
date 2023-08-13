import { StyledInputElement } from "./Input.styled";

export default function Input({id, text, value, type="text", handle}){

    return(
        <>
            <StyledInputElement placeholder={text} type={type} id={id} value={value} onChange={handle}/>  
        </>
    )
}