import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(undefined);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        if (Object.keys(response).length !== 0) {
          setUser(response);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user && !isLoading) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>Hello from user {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default User;
