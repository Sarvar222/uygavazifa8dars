import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReadTodo({ todos }) {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    setTodo(todos.find((t) => t.id == Number(id)));
  }, [id]);

  return (
    <div className="center mx-auto mt-5 w-40  text-black shadow-xl">
      {todo && (
        <>
          <div className="card-body justify-center">
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default ReadTodo;
