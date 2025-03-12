import SvgIcon from '../svg-icon/svg-icon';
import { TaskData } from '../to-do-list/to-do-list.schemas';
import './task.css';

const removeTask = (id: string) => {
  // reduce the list of tasks in the ContentProvider context by removing the task with the given id  
}

const Task = (props: TaskData) => {

  return (
    <article className="task" data-id={props.id}>
      <div className='content'>
        <button className='check-btn' title="marcar como completado">
          <SvgIcon iconName={'unchecked'}/>
        </button>
        <div>
          {props.title}
        </div>
      </div>
      <button className='delete-btn' title="borrar la tarea" onClick={() => removeTask(props.id.toString())}>
        <SvgIcon iconName={'trashBin'}/>
      </button>
    </article>
  );
};

export default Task;