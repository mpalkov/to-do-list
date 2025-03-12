import TasksFilter from "../TasksFilter/TasksFilter";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Header = () => {
  return (
    <header>
      <TasksFilter />
      <ThemeToggle />
    </header>
  )
}

export default Header;