const TodoCard = ({ item, index, editTodo, deleteTodo, toggleComplete }) => {


    return (
        <div className=" h-55 w-50 bg-white border-2 rounded-2xl border-pink-400 shadow-2xl shadow-gray-400 m-5 p-5 flex flex-col justify-between align-center text-center">
            <span
                onClick={() => toggleComplete(index)}
                className={item.completed ? "line-through text-gray-400 cursor-pointer" : "cursor-pointer" } 
            >
                {item.text}
            </span>
            <div className="flex justify-between">
                <button className="border rounded-xl px-2 py-2 w-18 hover:bg-pink-300"
                onClick={() => { editTodo(item, index) }}>edit</button>
            <button className="border rounded-xl px-2 py-2 w-18 hover:bg-pink-300"
                onClick={() => { deleteTodo(item) }}>delete</button>
            </div>

        </div>
    );
}

export default TodoCard;