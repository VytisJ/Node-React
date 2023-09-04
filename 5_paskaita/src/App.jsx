import { useEffect, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (name) {
      setAge(name.length > 5 ? 50 : 35);
    }
  }, [name]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((response) => {
        setData(response);
      });
  }, []);

  const handleCompleteTodo = (todo) => {
    // per data kintąmąjį darom map (ciklą)
    // tikrinam ar ateinančio todo.id sutampa su ciklo item.id
    // jeigu sutampa - grąžinam atnaujintą elementą
    // kitu atveju grąžinam ciklo itemą
    const updatedData = data.map((item) =>
      item.id === todo.id ? { ...item, completed: true } : item
    );

    setData(updatedData);
  };

  return (
    <div>
      {name} {age}
      <br />
      <button onClick={() => setName("Default")}>Set default name</button>
      {data.map((item) => (
        <h2
          key={item.id}
          style={{ backgroundColor: item.completed ? "green" : "yellow" }}
          onClick={() => handleCompleteTodo(item)}
        >
          {item.title}
        </h2>
      ))}
    </div>
  );
};

export default App;
