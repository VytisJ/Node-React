import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleRedirect = () => {
    navigate("/posts");
  };

  console.log(users);

  return (
    <div>
      <NavigationBar />
      <main>
        <h1>Users</h1>
        <button onClick={handleRedirect}>Redirect to posts</button>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Users;
