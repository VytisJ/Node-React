import { useEffect, useState } from "react";
import { fetchPosts } from "./api/post";

const AxiosGet = () => {
  const [data, setData] = useState([]);
  const [axiosData, setAxiosData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetchPosts()
      .then((response) => {
        setAxiosData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPosts();
        setAxiosData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log("data from fetch API:", data);
  console.log("data from axios:", axiosData);

  return <div>AxiosGet</div>;
};

export default AxiosGet;
