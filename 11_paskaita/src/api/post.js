import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async () => {
  const response = await axios.get(API);
  return response.data;
};

// 1. Sukurti createPost funkciją
export const createPost = async (post) => {
  const response = await axios.post(API, post);
  return response.data;
};
