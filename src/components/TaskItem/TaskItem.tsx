import SvgIcon from '../SvgIcon/SvgIcon';
import { TaskData } from '../../types/tasks';
import { useContentContext } from '../../context/ContentContext';
import './TaskItem.css';

const TaskItem = ({task}: {task: TaskData}) => {
  const { toggleTask, deleteTask } = useContentContext(); 

  return (
    <article className="task" data-id={task.id}>
      <div className='content'>
        <button className='checkbox' title="Cambiar el estado de la tarea" onClick={() => toggleTask(task.id)} >
          <SvgIcon iconName={task.completed ? 'checked': 'unchecked'}/>
        </button>
        <div>
          {task.title}
        </div>
      </div>
      <button className='delete-btn' title="borrar la tarea" onClick={() => deleteTask(task.id)}>
        <SvgIcon iconName={'trashBin'}/>
      </button>
    </article>
  );
};

export default TaskItem;