import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  const resp = await axios.get(API);
  return resp.data;
};

export const createUser = async (user) => {
  const resp = await axios.post(API, user);
  return resp.data;
};
