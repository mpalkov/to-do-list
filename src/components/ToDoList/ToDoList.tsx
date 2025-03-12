import TaskItem from '../TaskItem/TaskItem';
import './ToDoList.css';
import { TaskData } from '../../types/tasks';
// import { useContent } from '../../context/ContentContext';

const TEMP_TASKS_DATA = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
  }
];

const ToDoList = () => {
// populate the list with Task elements based on the data in the ContentProvider context using the useContent custom hook
// const { allTasks } = useContent();
const allTasks = TEMP_TASKS_DATA;
  
const TaskElements = allTasks.map((task: TaskData) => (
  <TaskItem 
  key={task.id}
  id={task.id}
  title={task.title}
  completed={task.completed}
  />
));
  

  return (
    <>
     {TaskElements}
    </>
  );
};

export default ToDoList;