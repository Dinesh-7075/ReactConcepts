import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Slices/todoSlice";
// import { addTodo } from "../actions";

const Tasks = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
  
    function addNewTask() {
      const task = inputRef.current.value.trim();
      if (task !== "") {
        dispatch(addTodo(task));
        inputRef.current.value = "";
      }
    }
  
    return (
      <div className="task-component">
        <div className="add-task">
          <input
            type="text"
            placeholder="Add task here..."
            ref={inputRef}
            className="taskInput"
          />
          <button className="add-btn" onClick={addNewTask}>Add task</button>
        </div>
      </div>
    );
  };
  
  export default Tasks;