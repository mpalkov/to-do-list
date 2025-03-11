import { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { ThemeContextType } from "./ThemeContext.types";

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};


export const ThemeProvider = ({ children }: {children : ReactNode}) => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode") === 'true' ? true : false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", darkMode.toString());
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};