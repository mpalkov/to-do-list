import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/theme-toggle/ThemeToggle';

function App() {

  return (
    <>
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
    </>
  )
}

export default App
