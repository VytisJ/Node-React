import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const ThemedButton = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <button
      style={{
        background: theme.background,
        color: theme.foreground,
      }}
      onClick={handleChangeTheme}
    >
      I am styled by theme context!
    </button>
  );
};

export default ThemedButton;
