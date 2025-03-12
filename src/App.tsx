import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/theme-toggle/ThemeToggle';
import ToDoList from './components/to-do-list/to-do-list';

function App() {

  return (
    <>
    <ThemeProvider>
      <header>
        {/* < NavFilter /> */}
        <nav>
          <span className='desktop-only'>
            Ver:
          </span>
          <ul>
            <li><button>Todas</button></li>
            <li><button>Completadas</button></li>
            <li><button>Pendientes</button></li>
          </ul>
        </nav>
        <ThemeToggle />
      </header>
      <ToDoList />
    </ThemeProvider>
    </>
  )
}

export default App
