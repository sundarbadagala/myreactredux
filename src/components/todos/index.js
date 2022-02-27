import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo } from "redux/actions/todoActions";

function Index() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  const [todo, setTodo] = useState("");
  const submitTodo = (e) => {
    e.preventDefault();
    const payload = {
      todo: todo,
      id: Date.now(),
    };
    dispatch(createTodo(payload));
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={(e) => submitTodo(e)}>
        <input
          type="text"
          placeholder="enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">create</button>
      </form>
      <ul>
        {todos &&
          todos.map((item) => (
            <li key={item.id}>
              {item.todo}
              <button onClick={()=>dispatch(deleteTodo(item.id))}>X</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Index;
