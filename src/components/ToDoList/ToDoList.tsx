import TaskItem from '../TaskItem/TaskItem';
import './ToDoList.css';
import { TaskData } from '../../types/tasks';
import { useContentContext } from '../../context/ContentContext';

const ToDoList = () => {
  const { state, refreshTasks } = useContentContext();
  const { filteredTasks, loading, error } = state;

  if (loading) {
    return <p className='flex-center'>Cargando...</p>;
  }

  if (error) {
    return (
      <>
        <p className='flex-center'>Error al obtener las tareas: {error}</p>
        <button className='btn' onClick={refreshTasks}>Reintentar</button>
      </>
    )
  }

  if (filteredTasks.length === 0) {
    return (
      <>
      <p className='flex-center'>No hay tareas que mostrar. Intenta cambiar el filtro o volver a cargarlas: </p>
      <button className='btn' onClick={refreshTasks}>Recargar</button>
      </>
    )
  }
  
  const TaskElements = filteredTasks.map((task: TaskData) => (
    <TaskItem 
      key={task.id}
      task={task}
    />
  ));

  return (
    <>
     {TaskElements}
    </>
  );
};

export default ToDoList;