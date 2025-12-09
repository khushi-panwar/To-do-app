
const TodoInput = ({currentTodo, setCurrentTodo, addOrUpdateTodo, isEdit}) => {
  return (
    <div className="flex justify-around items-center w-100% bg-gray-200" >

        <input className="border border-solid rounded-xl p-2 w-xl m-5 bg-white"
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
        placeholder="Enter a To-Do"
        />

        <button className="  w-30 m-5 p-2 rounded-3xl bg-pink-600 hover:bg-pink-700 text-white"
        onClick={addOrUpdateTodo}>{isEdit ? "Update" : "Add"}</button>

    </div>
  )
}



export default TodoInput;