import axios from "axios";
import { useState } from "react";
import { createTodo } from "./api/todo";

const AxiosPost = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = { userId: 1, completed: false, title };
    handleCreateWithFetchAPI(newTodo);
    handleCreateWithAxios(newTodo);
    handleCreateWithAxiosV2(newTodo);
    handleCreateWithAxiosAsyncAwait(newTodo);
  };

  const handleCreateWithFetchAPI = (todo) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    };

    fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
      .then((resp) => resp.json())
      .then((response) => {
        setTodos((prevTodos) => [...prevTodos, response]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCreateWithAxios = (todo) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", todo)
      .then((resp) => resp.data)
      .then((response) => {
        setTodos((prevTodos) => [...prevTodos, response]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCreateWithAxiosV2 = (todo) => {
    createTodo(todo)
      .then((response) => {
        setTodos((prevTodos) => [...prevTodos, response]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCreateWithAxiosAsyncAwait = async (todo) => {
    try {
      const response = await createTodo(todo);
      setTodos((prevTodos) => [...prevTodos, response]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Todo form</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title..."
          required
        />
        <button type="submit">Submit new todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={`${todo.id}_${index}`}>
            {todo.title} ({todo.completed ? "Padaryta" : "Nepadaryta"})
          </li>
        ))}
      </ul>
    </>
  );
};

export default AxiosPost;
