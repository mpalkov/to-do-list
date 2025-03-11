import { createContext, useState, useEffect } from "react";
import { Theme, ThemeContextType, ThemeProviderProps } from "./ThemeContext.types";

export const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    setTheme: () => {}
  }
);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem("theme") as Theme || "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};