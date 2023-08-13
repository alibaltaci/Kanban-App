import { useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { StyledAddTodo } from "./AddTodo.styled";
import data from "../../../data/data.json"

export  default function AddTodo({tasks, setTasks}){

  const {inputText, buttonText} = data.kanbanPage.add

  const [input, setInput] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault()
        const trimmedInput = input.trim();
        const allData = [...tasks.todo.data, ...tasks.done.data, ...tasks.inProgress.data] 
        if (trimmedInput !== "") {
          if (!allData.some(task => task.content.toLocaleLowerCase() === trimmedInput.toLocaleLowerCase())) {
            setTasks((prevTasks) => {
              const newTodo = prevTasks.todo.data
              const newTypeData = prevTasks.todo
              const newTasks = {...prevTasks, todo:{...newTypeData, data: [{ content: trimmedInput, status: "todo" }, ...newTodo]}} ;
              return newTasks;
            });
            setInput("");
          } else {
            // Kullanıcıya uyarı verebilir veya işlem yapmayabilirsiniz.
            // Örneğin: alert("Bu görev zaten var!");
          }
        }
      }

      return(
        <StyledAddTodo onSubmit={handleSubmit}>
            <Input id="add-todo" text={inputText} value={input} handle={e => setInput(e.target.value)}  />
            <Button type="submit" variant="primary" text={buttonText}  color="black" hover="#ffb5b5"  />
        </StyledAddTodo>
      )
    
}