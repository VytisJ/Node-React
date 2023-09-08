import { useRef, useState, createContext, useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext(themes.light); // createContext sukuri kontekstu ir priima default value

const ThemedButton = () => {
  const theme = useContext(ThemeContext); // useContext ištraukti duomenim iš contexto ir priima context kurį naudosim
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
};

const SimpleExample = () => {
  const count = useRef(0); // {current: 0}
  const inputRef = useRef(null);
  const [countV, setCountV] = useState(0);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    count.current = count.current + 1;
    setCountV(countV + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
    inputRef.current.focus();
  };

  return (
    <ThemeContext.Provider value={themes.light}>
      {/* Context.Provider - wrapperis kuriam paduoda reikšmę, kuria naudosim aplikacijoje */}
      <div>
        <h2>{count.current}</h2>
        <h2>{countV}</h2>
        <button onClick={handleClick}>Click me</button>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            placeholder="Todo..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">Add todo</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
};

export default SimpleExample;
