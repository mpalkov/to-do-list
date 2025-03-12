import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import ToDoList from './components/ToDoList/ToDoList';
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
      <main>
        <ToDoList />
      </main>
    </ThemeProvider>
    {/* </ContentProvider> */}
    </>
  )
}

export default App
