import { StyledKanbanBoard } from "./KanbanBoard.styled"
import  KanbanBoardElement  from "./KanbanBoardElement"

export default function KanbanBoard({ tasks, setTasks}){
    
    return(
        <StyledKanbanBoard>
            {
                Object.keys(tasks).map((type) => (
                <KanbanBoardElement
                    key={tasks[type].type}
                    tasks={tasks[type].data}
                    title={tasks[type].title}
                    type={tasks[type].type}
                    color={tasks[type].color}
                    setTasks={setTasks}
                />
                ))
            }
        </StyledKanbanBoard>
    )
}