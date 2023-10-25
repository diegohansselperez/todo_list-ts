import { useState } from 'react';
import Todos from './components/Todos';
import { TODO_FILTERS } from './conts';
import Footer from './components/Footer';
import Header from './components/Header';
import { type TodoTitle } from './types';

const mockTodos = [
  { id: '1', title: 'Ir a comprar la cena', completed: false },
  { id: '2', title: 'Llevar el perro al parque', completed: false },
  { id: '3', title: 'Ir al Gym', completed: false },
];

function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<
    (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS]
  >(TODO_FILTERS.ALL);

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
  ): void => {
    setFilterSelected(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  return (
    <>
      <div className="todoapp">
        <Header onAddTodo={handleAddTodo} />{' '}
        <Todos
          onRemoveTodo={handleRemove}
          todos={filteredTodos}
          onHandleCompleted={hanldleCompleted}
        />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          onClearCompleted={handleRemoveAllCompleted}
          handleFilterChange={handlesFilterChange}
        />
      </div>
    </>
  );
}

export default App;
