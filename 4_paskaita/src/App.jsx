import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isNight, setIsNight] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState([7]);

  const names = ["Rokas", "Tomas", "Tadas", "Petras"];

  const handleAddRandomNumber = () => {
    // [...randomNumbers] - array spreading - visi elementai yra nuklonuojami į naują masyvą
    // [...randomNumbers, 5] - po kablelio nauja reikšmė, kuri keliauja į galą. (array.push() alternatyva react sistemoje)

    const randomNumber = Math.floor(Math.random() * 10);
    setRandomNumbers([...randomNumbers, randomNumber]);
  };

  const resetEverything = () => {
    setCount(0);
    setName("");
    setIsNight(false);
    setRandomNumbers([]);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(5)}>Set count to five</button>
      <button onClick={() => setCount(10)}>Set count to 10</button>
      <br />
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      <button onClick={() => setCount(0)}>Reset counter</button>
      <br />
      <br />
      My name is {name}
      <br />
      <button onClick={() => setName("Rokas")}>Rokas</button>
      <button onClick={() => setName("Tomas")}>Tomas</button>
      <button onClick={() => setName("Tadas")}>Tadas</button>
      <br />
      <br />
      My name is {name ? name : "..."}
      <br />
      {names.map((name) => (
        <button key={name} onClick={() => setName(name)}>
          {name}
        </button>
      ))}
      <br />
      <br />
      {isNight ? (
        <span
          style={{ background: "blue", color: "white" }}
          onClick={() => setIsNight(false)}
        >
          Now is mighty night
        </span>
      ) : (
        <span style={{ background: "yellow" }} onClick={() => setIsNight(true)}>
          Now is sunny day
        </span>
      )}
      <br />
      <br />
      {randomNumbers.map((number, index) => (
        <span key={`${number}_${index}`}>{number}</span>
      ))}
      <br />
      <button onClick={handleAddRandomNumber}>Add random number</button>
      <br />
      <button onClick={resetEverything}>Reset everything</button>
      <button
        onClick={() => {
          setCount(0);
          setName("");
          setIsNight(false);
          setRandomNumbers([]);
        }}
      >
        Reset everything v2
      </button>
    </div>
  );
};

export default App;
