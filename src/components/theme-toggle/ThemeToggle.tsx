import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { ThemeContextType } from "../../context/ThemeContext.types";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <button
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded transition-all"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode" }
    </button>
  );
};

export default ThemeToggle;