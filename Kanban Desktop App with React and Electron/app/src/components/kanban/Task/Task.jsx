import TextBox from "../../ui/TextBox/TextBox"
import Typography from "../../ui/Typography/Typography"
import TaskIconsComponents from "./TaskIconsComponets";

export default  function Task({task, handleDelete, handleEditClick, index, onDrop, onDragOver}){

    return(
            <TextBox type={task.status} 
                key={task.content}
                draggable
                onDragStart={ (e) => {
                    e.dataTransfer.setData("content", task.content)
                    e.dataTransfer.setData("status", task.status)
                }}
            >
                    <Typography text={task.content} />
                    <TaskIconsComponents handleDelete={handleDelete} handleEditClick={handleEditClick} />
            </TextBox>
    )

}