import { styled } from "styled-components";

export const StyledKanbanBoard = styled.div`
    display: flex;
    min-height: 60vh; 
    margin-top: 2rem;
    gap: 1.5rem;
    padding: 1rem;
    background-image: url("/images/common/endless-pattern-by-pooya-ramezani.jpg");
    background-size: cover;
    background-repeat: repeat;
    border-radius: 20px;
    font-size: 18px;

    @media screen and (max-width: 768px){
        display: block;
    }
`

export const StyledKanbanBoardElement = styled.div`
    flex: 1;
    align-items: center;
    background: linear-gradient(109.6deg, rgba(36, 45, 57, 0.9) 11.2%, rgba(16, 37, 60, 0.9) 51.2%, rgba(0, 0, 0, 0.9) 98.6%);
    border-radius: 20px;
    padding: 0.8rem;
    box-shadow: 21px 19px 14px rgba(5, 5, 5, 0.2);
`
export const StyledKanbanBoardElementTodo = styled(StyledKanbanBoardElement)`
    border: 4px solid #C25C7A;
`
export const StyledKanbanBoardElementInProgress = styled(StyledKanbanBoardElement)`
    border: 4px solid #CCA164;
`
export const StyledKanbanBoardElementDone = styled(StyledKanbanBoardElement)`
    border: 4px solid #0C8F7F;
`