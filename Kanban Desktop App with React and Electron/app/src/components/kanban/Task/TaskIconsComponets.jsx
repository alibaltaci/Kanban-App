import { styled } from "styled-components";
import DeleteIcon from "../../icons/DeleteIcon";
import EditIcon from "../../icons/EditIcon";

export default function TaskIconsComponents({handleDelete, handleEditClick}){

    return(
        <StyledTaskIconsComponenets>
            <div onClick={handleEditClick}>
                <EditIcon />
            </div>
            <div onClick={handleDelete}>
                <DeleteIcon  />
            </div>
        </StyledTaskIconsComponenets>
    )
}

const StyledTaskIconsComponenets = styled.div`
    display: flex;
`