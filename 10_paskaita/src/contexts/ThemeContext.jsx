import { createContext, useState } from "react";

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

const ThemeContext = createContext({
  theme: themes.light,
  handleChangeTheme: () => null,
});

const ThemeProvider = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState("light");

  const handleChangeTheme = () => {
    setActiveTheme(activeTheme === "light" ? "dark" : "light");
  };

  const theme = activeTheme === "light" ? themes.light : themes.dark;

  // value={activeTheme} => const activeTheme = useContext()
  // value={{activeTheme, handleChangeTheme}} => const {activeTheme, handleChangeTheme} = useContext()
  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
