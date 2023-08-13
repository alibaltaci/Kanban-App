import { styled } from "styled-components";

export const StyledAddTodo = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-height: 10rem;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

`