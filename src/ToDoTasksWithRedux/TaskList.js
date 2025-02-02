import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteTodo } from '../actions';
import Tasks from './Tasks';
import { deleteTodo } from '../Slices/todoSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.todos.jobs);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="tasklist">
        <Tasks />
      <div className="display-tasks">
        <h3>Your tasks:</h3>
        <ul className="tasks">
          {tasks.map((task) => (
            <li className="task" key={task.id}>
              {task.text}
              <button
                className="add-btn"
                onClick={() => handleDelete(task.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default TaskList;