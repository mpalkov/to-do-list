import SvgIcon from '../svg-icon/svg-icon';
import './task.css';
// import { TaskData } from "../to-do-list/to-do-list.schemas";

const Task = (/*props: TaskData*/) => {

  return (
    <article className="task">
      <div>
        <SvgIcon iconName={'checked'} />
        Titulo del task</div>
      <div className='delete-btn'>🗑</div>
    </article>
  );
};

export default Task;