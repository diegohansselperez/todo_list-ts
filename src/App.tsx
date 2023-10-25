import { useState } from 'react';
import Todos from './components/Todos';

const mockTodos = [
  { id: '1', title: 'Ir a comprar la cena', completed: false },
  { id: '2', title: 'Llevar el perro al parque', completed: false },
  { id: '3', title: 'Ir al Gym', completed: false },
];

function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos);

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
