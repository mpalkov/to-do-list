import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/theme-toggle/ThemeToggle';
import ToDoList from './components/to-do-list/to-do-list';
// import { ContentProvider } from './context/ContentContext';

function App() {

  return (
    <>
    {/* <ContentProvider> */}
    <ThemeProvider>
      <header>
        {/* < NavFilter /> */}
        <nav>
          <span className='desktop-only'>
            Ver:
          </span>
          <ul>
            <li><button className='btn'>Todas</button></li>
            <li><button className='btn'>Completadas</button></li>
            <li><button className='btn'>Pendientes</button></li>
          </ul>
        </nav>
        <ThemeToggle />
      </header>
      <ToDoList />
    </ThemeProvider>
    {/* </ContentProvider> */}
    </>
  )
}

export default App
