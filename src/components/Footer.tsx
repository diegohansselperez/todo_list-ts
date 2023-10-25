import { type TODO_FILTERS } from '../conts';
import Filters from './Filters';

interface Props {
  activeCount: number;
  completedCount: number;
  handleFilterChange: (
    filter: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS],
  ) => void;
  onClearCompleted: () => void;
  filterSelected: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
}

const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  handleFilterChange,
  onHandleCompleted,
}) => {
  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount}</strong> tareas pendientes
        </span>

        <Filters
          filterSelected={filterSelected}
          onFilterChange={handleFilterChange}
        />
      </footer>
    </>
  );
};

export default Footer;
