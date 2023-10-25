import { useState } from 'react';
import Todos from './components/Todos';
import { TODO_FILTERS } from './conts';

const mockTodos = [
  { id: '1', title: 'Ir a comprar la cena', completed: false },
  { id: '2', title: 'Llevar el perro al parque', completed: false },
  { id: '3', title: 'Ir al Gym', completed: false },
];

function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState(TODO_FILTERS.ALL);

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };

  const hanldleCompleted = (id: string, completed: boolean): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handlesFilterChange = (
    filter: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS],
  ) => {};

  return (
    <>
      <div className="todoapp">
        {' '}
        <Todos
          onRemoveTodo={handleRemove}
          todos={todos}
          onHandleCompleted={hanldleCompleted}
        />
      </div>
    </>
  );
}

export default App;
