import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Pagination = () => {
  const [todos, setToDos] = useState([]);
  const [todosPerPage, setTodosPerpage] = useState(10);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setToDos(res.data))
      .catch((e) => console.log(e.message));
    console.log(todos);
  }, []);

  const indexOfLastTodo = currPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

  const visibleTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const Totalpages = Math.ceil(todos.length / todosPerPage);
  const pages = [...Array(Totalpages + 1).keys()].slice(1);

  const handleEntriesPerPage = (e) => {
    setTodosPerpage(e.target.value);
  };

  const nextPageHandler = () => {
    if (currPage !== Totalpages) setCurrPage(currPage + 1);
  };

  const prevPageHandler = () => {
    if (currPage !== 1) setCurrPage(currPage - 1);
  };

  console.log(todos);
  return (
    <div>
      {visibleTodos.map((todo) => (
        <p key={todo.id} className="text-lg">
          ⚫ {todo.title}
        </p>
      ))}
      <div className="m-5 p-3">
        <label>Show Entries</label>
        <select className="border mx-1 px-1" onChange={handleEntriesPerPage}>
          <option>5</option>
          <option selected>10</option>
          <option>15</option>
          <option>20</option>
        </select>
        <span className="cursor-pointer mx-1 ml-5" onClick={prevPageHandler}>
          {" "}
          Prev{" "}
        </span>
        <span>
          {pages.map((page) => (
            <span
              className={
                "cursor-pointer " +
                (currPage === page
                  ? "font-extrabold text-slate-900 text-xl"
                  : "")
              }
              key={page}
              onClick={() => {
                setCurrPage(page);
              }}
            >
              | {page}{" "}
            </span>
          ))}
        </span>
        <span className="cursor-pointer mx-1 " onClick={nextPageHandler}>
          Next
        </span>
      </div>
    </div>
  );
};

export default Pagination;
