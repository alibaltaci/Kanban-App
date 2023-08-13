import TextBox from "../../ui/TextBox/TextBox"
import Typography from "../../ui/Typography/Typography"
import TaskIconsComponents from "./TaskIconsComponets";

export default  function Task({task, handleDelete, handleEditClick, index, onDrop, onDragOver}){
    
    // const handleEditClick = async(e) => {
    //     // handleDelete()
    //     console.log("tık")
    //     const value = await task.content;
    //     e.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.firstChild.value = value;
    // };
    return(
            <TextBox type={task.status} 
                key={task.content}
                draggable
                onDragStart={ (e) => {
                    e.dataTransfer.setData("content", task.content)
                    e.dataTransfer.setData("status", task.status)
                }}
                // onDragOver={ onDragOver }
                // onDrop = {e => onDrop(e, index)}
            >
                    <Typography text={task.content} />
                    <TaskIconsComponents handleDelete={handleDelete} handleEditClick={handleEditClick} />
            </TextBox>
    )

}