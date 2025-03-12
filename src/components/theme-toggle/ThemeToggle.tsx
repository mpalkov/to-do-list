import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(darkMode ? false : true)}
    >
      {darkMode ? (<>☀️<span className="desktop-only"> Modo claro</span></>) : (<>🌙<span className="desktop-only">  Modo oscuro</span></>)}
    </button>
  );
};

export default ThemeToggle;