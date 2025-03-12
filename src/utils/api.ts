import { TaskData } from '../types/tasks';

const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

export const fetchTasks = async (): Promise<TaskData[]> => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('No se han podido obtener datos de la API');
    }
    
    const data: TaskData[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener datos de la API:', error);
    throw error;
  }
};