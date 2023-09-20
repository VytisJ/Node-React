import { useEffect, useState } from "react";
import { fetchUsers, createUser } from "./api/user";

const fakeUser = {
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchUsers()
      .then((response) => setUsers(response))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { ...fakeUser, name };
      const response = await createUser(newUser);
      setUsers((prevUsers) => [...prevUsers, response]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name..."
        />
        <button type="submit">Create new user</button>
      </form>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Users;
