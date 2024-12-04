import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export const Home = ({ todos, deleteTodo, editedTodo }) => {
  const [todoid, setTodoId] = useState(null);
  const [todo, setTodo] = useState(null);

  return (
    <div className="mx-auto mt-10 max-w-5xl">
      <ul className="grid grid-cols-3">
        <Modal todo={todo} editedTodo={editedTodo} />
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <div className="card mb-5 w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{todo.title}</h2>
                  <p>{todo.description}</p>
                  <button
                    className="btn btn-sm"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <FaTrash />
                  </button>
                  <div className="card-actions">
                    <button
                      className="btn btn-sm w-full"
                      onClick={() => {
                        setTodoId(todo.id);
                        setTodo(todo);
                        document.getElementById("my_modal_1").showModal();
                      }}
                    >
                      <FaPen />
                    </button>
                    <Link to={`/read/${todo.id}`} className="btn btn-sm w-full">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Home.propTypes = {
  todos: Array,
};
