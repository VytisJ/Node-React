import ColorBox from "./components/ColorBox";
import Greeting from "./components/Greeting";
import AdultChecker from "./components/AdultChecker";
import NotificationCount from "./components/NotificationCount";
import Hero from "./components/Hero";
import Button from "./components/Button";
import UserCard from "./components/UserCard";

const App = () => {
  const buttons = ["Pirmas", "Antras", "Trecias", "Ketvirtas"];
  const fruits = ["Apple", "Pineapple", "Banana", "Apple"];

  const users = [
    { id: 1, name: "Rokas", surname: "Andreikenas", age: 20 },
    { id: 2, name: "Tomas", surname: "Tomukas", age: 30 },
    { id: 3, name: "Tadas", surname: "Tadukas", age: 40 },
  ];

  return (
    <div>
      <Greeting isLoggedIn={false} />
      <ColorBox color="red" />
      <ColorBox color="blue" />
      <ColorBox color="yellow" />
      <AdultChecker age={15} />
      <AdultChecker age={25} />
      <NotificationCount count={50} />
      <NotificationCount count={150} />
      <Hero title="Tets me" subtitle="help me" />
      <Hero title="Tets me" />
      <br />
      <Button>Pirmas mygtukas</Button>
      <Button>Antras mygtukas</Button>
      <Button>Trecias mygtukas</Button>
      <Button>Ketvirtas mygtukas</Button>
      <br />
      {["Pirmas", "Antras", "Trecias", "Ketvirtas"].map((item) => (
        <Button key={item}>{item} mygtukas</Button>
      ))}
      <br />
      {buttons.map((button) => (
        <Button key={button}>{button} mygtukas</Button>
      ))}
      <br />
      <ul>
        {fruits.map((fruit, index) => (
          <li key={`${fruit}_${index}`}>{fruit}</li>
        ))}
      </ul>
      <br />
      {fruits.map((fruit, index) => (
        <div key={`${fruit}_${index}`}>
          {fruit} is <strong>{index + 1}</strong> item in the basket.
        </div>
      ))}
      <br />
      {users.map((user) => (
        <div key={user.id}>
          {user.name} {user.surname} <strong>{user.age}</strong> metų.
        </div>
      ))}
      <br />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default App;
