import { useState } from "react";
import { useContentContext } from "../../context/ContentContext";
import { FilterType } from "../../types";

export const TasksFilter = () => {
  const { setFilter } = useContentContext();
  const [ isOpen, setIsOpen ] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  const toggleFilter = (filter: FilterType) => {
    setFilter(filter);
    setIsOpen(false);
  }
  
  return (
    <>
    <nav className="filter-desktop desktop-only">
      <span>
        Ver:
      </span>
      <ul>
        <li>
          <button className='btn' onClick={() => setFilter('all')}>
            Todas
          </button>
        </li>
        <li>
          <button className='btn' onClick={() => setFilter('completed')}>
            Completadas
          </button>
        </li>
        <li>
          <button className='btn' onClick={() => setFilter('pending')}>
            Pendientes
          </button>
        </li>
      </ul>
    </nav>
    <nav className="filter-mobile mobile-only">
      <button className='btn' onClick={toggleOpen}>
        Ver: ∨
      </button>

      <ul className={`filter-options ${isOpen ? 'open' : ''}`}>
      <li>
          <button className='btn' onClick={() => toggleFilter('all')}>
            Todas
          </button>
        </li>
        <li>
          <button className='btn' onClick={() => toggleFilter('completed')}>
            Completadas
          </button>
        </li>
        <li>
          <button className='btn' onClick={() => toggleFilter('pending')}>
            Pendientes
          </button>
        </li>        
      </ul>
    </nav>
    </>
  )
}

export default TasksFilter;