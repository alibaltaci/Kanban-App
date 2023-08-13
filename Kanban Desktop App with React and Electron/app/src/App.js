// import { useState } from "react";
import AddTodo from "./components/kanban/AddTodo/AddTodo";
import Typography from "./components/ui/Typography/Typography";
import KanbanBoard from "./components/kanban/KanbanBoard/KanbanBoard";
import './App.css'
import { StyledApp } from "./App.styled";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useEffect, useState } from "react";
import Footer from "./components/footer/Footer";

// draggable
// onDragStart  --> dataTransfer -> getData / setData
// onDrop 
// onDragOver  --> preventDefault

function App() {

    const INITIAL_STATE =       {            
      todo:{
        type:"todo",
        title:"Todo",
        color:"#C25C7A",
        data:[]
      },
      inProgress:{
        type: "inProgress",
        title: "In Progress",
        color: "#CCA164",
        data:[]
      },
      done: {
        type:"done",
        title:"Done",
        color:"#0C8F7F",
        data:[]
      },
    }

    // const INITIAL_STATE = {"todo":{"type":"todo","title":"Todo","color":"#C25C7A","data":[{"content":"todo editleyebilme özelliği ekle","status":"todo"},{"content":"tüm dataları data klasörüne taşı","status":"todo"},{"content":"data klasörü oluştur","status":"todo"},{"content":"social media iconları ekle","status":"todo"},{"content":"image card componenti oluştur","status":"todo"},{"content":"uyarı alanı ekle","status":"todo"},{"content":"resposive stil","status":"todo"},{"content":"projeyi masa üstü uygulaması yap","status":"todo"}]},"inProgress":{"type":"inProgress","title":"In Progress","color":"#CCA164","data":[]},"done":{"type":"done","title":"Done","color":"#0C8F7F","data":[{"content":"liste içi eleman yer değiştirebilme","status":"done"},{"content":"son eklenen todo başa gelsin","status":"done"},{"content":"internet parasını öde","status":"done"},{"content":"divider ekle","status":"done"},{"content":"input alanını düzenle","status":"done"},{"content":"useLocalStorage hook u tanımla","status":"done"},{"content":"button renk hatasını düzelt","status":"done"},{"content":"sayfa başlığını düzenle","status":"done"},{"content":"kanaban element düzenle","status":"done"},{"content":"dataları local storage a kaydet","status":"done"},{"content":"font ekle","status":"done"},{"content":"input submit olsun","status":"done"},{"content":"delete icon ekle","status":"done"},{"content":"yazıları değiştir","status":"done"},{"content":"delete fonksşyonu ekle","status":"done"}]}}
    const [ storage, setStorage ] = useLocalStorage("jotVistaKanbanData", INITIAL_STATE)

    const [ tasks, setTasks ] = useState( storage )

    useEffect( () => {
      setStorage( tasks )
    })

  return (
    <StyledApp>
      <Typography elementType="h1" text="Jot Vista" textalign="center" color="#ffb5b5"  />
      <AddTodo tasks={tasks} setTasks={setTasks}  />
      <KanbanBoard tasks={tasks} setTasks={setTasks}/>
      <Footer />
    </StyledApp>
  );
}

export default App;
