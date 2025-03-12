import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import ToDoList from './components/ToDoList/ToDoList';
import Header from './components/Header/Header';
import { ContentProvider } from './context/ContentContext';
function App() {

  return (
    <>
    <ContentProvider>
    <ThemeProvider>
      <Header />
      <main>
        <ToDoList />
      </main>
    </ThemeProvider>
    </ContentProvider>
    </>
  )
}

export default App
