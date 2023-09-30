import { useEffect, useState } from "react";
import { capitalize } from "./utils";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{capitalize(todo.title)}</h1>
          <p>{todo.completed ? "Completed" : "Not completed"}</p>
        </div>
      ))}
    </>
  );
}

export default App;
