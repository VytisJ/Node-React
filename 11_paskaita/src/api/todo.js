import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async () => {
  const resp = await axios.get(API);
  return resp.data;
};

export const createTodo = async (todo) => {
  const resp = await axios.post(API, todo);
  return resp.data;
};
