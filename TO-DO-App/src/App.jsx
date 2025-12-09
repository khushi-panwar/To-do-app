// Your features:
// Add Todo
// Delete Todo
// Edit Todo
// Mark Todo Completed (strike-through)
// Each TodoCard has its own internal counter (like your previous task)
// Everything must be split into:
//      App.jsx
//      TodoInput.jsx
//      TodoList.jsx
//      TodoCard.jsx

import { useState } from "react"
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

const App = () => {
  const [toDo, setTodo] = useState([{ text: "Coding", completed: false }]); // all data in one 
  const [currentTodo, setCurrentTodo] = useState("") // to get data from input
  const [editIndex, setEditIndex] = useState(null);// for edit - need index

  //  add/update functionality
  const addOrUpdateTodo = () => {
    const trimmentTodo = currentTodo.trim();
    if ( trimmentTodo === "") {
      alert(" No tasks available. Add something!")
      return ;
    }
    //no duplicate to be allowed
    const isDuplicate = toDo.some((item, index) => item.text.toLowerCase() === trimmentTodo.toLowerCase() && index != editIndex)

     if (isDuplicate) {
    alert("This task already exists!");
    return;
    }


    // update todo 
    if (editIndex !== null) {
      setTodo(prev => prev.map((item, index) => index === editIndex ? { ...item, text: trimmentTodo } : item)
      )
      setEditIndex(null); // reset edit mode
      setCurrentTodo(""); // clear input
      return;
    }

    // add todo
    setTodo(prev => [...prev, { text: trimmentTodo, completed: false }]);
    setCurrentTodo(""); // clearing input         
  }

  const toggleComplete = (indexToToggle) => {
    setTodo(prev => prev.map((item, index) => index === indexToToggle? {...item , completed: !item.completed} : item));

  }

  const deleteTodo = (itemToDelete) => {
    setTodo(prev => prev.filter(item => item !== itemToDelete))
  }

  const editTodo = (item, index) => {
    setEditIndex(index);
    setCurrentTodo(item.text);//show selected one in input to edit     
  }


  return (
    <div className="w-100%" >
      <TodoInput
        currentTodo={currentTodo}
        setCurrentTodo={setCurrentTodo}
        addOrUpdateTodo={addOrUpdateTodo}
        isEdit={editIndex !== null}
      />

      <TodoList
        toDos={toDo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleComplete={toggleComplete}
      />


    </div>
  )
}

export default App