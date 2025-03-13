import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { FilterType } from '../types';
import { TaskData } from '../types/tasks';
import { fetchTasks } from '../utils/api';
import { ContentState, ContentContextType } from '../types/contentContext';
import { applyFilter } from '../utils/filter';

type TaskAction =
  | { type: 'FETCH_TASKS_START' }
  | { type: 'FETCH_TASKS_SUCCESS'; payload: TaskData[] }
  | { type: 'FETCH_TASKS_ERROR'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: number }
  | { type: 'DELETE_TASK'; payload: number }
  | { type: 'SET_FILTER'; payload: FilterType }
  | { type: 'SET_INITIAL_LOAD_COMPLETE' };

const initialState: ContentState = {
  tasks: [],
  filteredTasks: [],
  filter: 'all',
  loading: false,
  error: null,
  initialLoadComplete: false,
};

const contentReducer = (state: ContentState, action: TaskAction): ContentState => {
  switch (action.type) {
    case 'FETCH_TASKS_START':
      return { ...state, loading: true, error: null };
    
    case 'FETCH_TASKS_SUCCESS':
      return {
        ...state,
        tasks: action.payload,
        filteredTasks: applyFilter(action.payload, state.filter),
        loading: false,
      };
    
    case 'FETCH_TASKS_ERROR':
      return { ...state, error: action.payload, loading: false };
    
    case 'TOGGLE_TASK': {
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      return {
        ...state,
        tasks: updatedTasks,
        filteredTasks: applyFilter(updatedTasks, state.filter),
      };
    }
    
    case 'DELETE_TASK': {
      const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
      return {
        ...state,
        tasks: updatedTasks,
        filteredTasks: applyFilter(updatedTasks, state.filter),
      };
    }
    
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
        filteredTasks: applyFilter(state.tasks, action.payload),
      };
    
    case 'SET_INITIAL_LOAD_COMPLETE':
      return {
        ...state,
        initialLoadComplete: true,
      };
    
    default:
      return state;
  }
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialContentState = (() => {
    try {
      const savedTasks = localStorage.getItem('tasks');
      const tasks = savedTasks ? JSON.parse(savedTasks) : [];
      
      const savedInitialLoadComplete = localStorage.getItem('initialLoadComplete');
      const initialLoadComplete = savedInitialLoadComplete 
        ? JSON.parse(savedInitialLoadComplete) 
        : false;

      const savedFilter = localStorage.getItem('filter');
      const filter = savedFilter ? JSON.parse(savedFilter) : 'all';
      
      return {
        ...initialState,
        tasks,
        filteredTasks: applyFilter(tasks, filter),
        initialLoadComplete,
        filter,
      };
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialState;
    }
  })();

  const [state, dispatch] = useReducer(contentReducer, initialContentState);

  useEffect(() => {
    const loadTasks = async () => {
      if (state.tasks.length === 0 && !state.initialLoadComplete) {
        dispatch({ type: 'FETCH_TASKS_START' });
        
        try {
          const apiTasks = await fetchTasks();
          dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: apiTasks });
        } catch (error) {
          dispatch({ 
            type: 'FETCH_TASKS_ERROR', 
            payload: `No se pudieron obtener las tareas. ${error}`
          });
        }
        
        dispatch({ type: 'SET_INITIAL_LOAD_COMPLETE' });
      }
    };
    
    loadTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
    
    localStorage.setItem('initialLoadComplete', JSON.stringify(state.initialLoadComplete));
  }, [state.tasks, state.initialLoadComplete]);

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(state.filter));
  }, [state.filter]);

  const toggleTask = (id: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };
  
  const deleteTask = (id: number) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };
  
  const setFilter = (filter: FilterType) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };
  
  const refreshTasks = async () => {
    dispatch({ type: 'FETCH_TASKS_START' });
    try {
      const apiTasks = await fetchTasks();
      dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: apiTasks });
    } catch (error) {
      dispatch({ 
        type: 'FETCH_TASKS_ERROR', 
        payload: `No se pudieron obtener las tareas. ${error}` 
      });
    }
  };

  return (
    <ContentContext.Provider 
      value={{ 
        state, 
        toggleTask, 
        deleteTask, 
        setFilter,
        refreshTasks
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContentContext = (): ContentContextType => {
  const context = useContext(ContentContext);
  
  if (context === undefined) {
    throw new Error('useContentContext se ha de usar dentro de ContentProvider');
  }
  
  return context;
};