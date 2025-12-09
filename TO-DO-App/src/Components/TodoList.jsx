import TodoCard from "./TodoCard";


 const TodoList = ({toDos, deleteTodo, editTodo , toggleComplete}) => {
  return (
    <div className="flex w-100%">
          {toDos.map(( item, index)  => (
          <TodoCard 
            key={item.text}
            item = {item} 
            index={index}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
        </div>
  )
}

export default TodoList;