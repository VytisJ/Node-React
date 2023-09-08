import ThemedButton from "./ThemedButton";
import { ThemeProvider } from "./contexts/ThemeContext";

const AdvancedExample = () => {
  return (
    <ThemeProvider>
      Hello from AdvancedExample
      <ThemedButton />
    </ThemeProvider>
  );
};

export default AdvancedExample;
