import Divider from "../../ui/Divider/Divider";
import Typography from "../../ui/Typography/Typography";
import Task from "../Task/Task";
import { StyledKanbanBoardElement, StyledKanbanBoardElementDone, StyledKanbanBoardElementInProgress, StyledKanbanBoardElementTodo } from "./KanbanBoard.styled";

export default function KanbanBoardElement({
    title,
    tasks,
    type,
    color,
    setTasks
}){

    const onDragOver = e => {
        e.preventDefault()
    }
  
    const onDrop = (e, type) => {
        const content = e.dataTransfer.getData("content")
        const status = e.dataTransfer.getData("status")
        const isContent = tasks.some( item => item.content === content )
  
        if(!isContent){
          setTasks((prevTasks) => {
            const newTypeData = prevTasks[type]
            const newStatusTodoData = prevTasks[status].data.filter( el => el.content !== content)
            const newStatusTypeData = prevTasks[status]
            const newTasks = {...prevTasks, [type]:{ ...newTypeData, data:[{content: content, status: type}, ...tasks] }, [status]:{...newStatusTypeData, data:newStatusTodoData}} ;
            return newTasks;
         })}
    }

    const handleDelete = (content) => {
        console.log(content);
        setTasks((prevTasks) => {
            const newTasks = {
                ...prevTasks,
                [type]: {
                    ...prevTasks[type],
                    data: prevTasks[type].data.filter(task => task.content !== content)
                }
            };
            return newTasks;
        });
    }

    const handleEditClick = async(e, task) => {
        const value = await task;
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.nextElementSibling.firstChild.value = value;
    };

    const WrapperComponent =
        type === 'todo'
          ? StyledKanbanBoardElementTodo
          : type === 'inProgress'
          ? StyledKanbanBoardElementInProgress
          : type === 'done'
          ? StyledKanbanBoardElementDone
          : StyledKanbanBoardElement;

    return(
        <WrapperComponent
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, type)}
        >
            <Typography text={title} elementType="h2" color={color}  margin="1rem 0" textalign="center" />
            <Divider thickness="2px" border="dashed" color={color} />
            <>
                {
                    tasks.map( (el) => (
                        <Task key={el.content} 
                            task={el} 
                            handleDelete={() => handleDelete(el.content)}
                            handleEditClick={(e) => handleEditClick(e, el.content)}
                        />
                    ))
                }
                
            </>
        </WrapperComponent>
    )
}