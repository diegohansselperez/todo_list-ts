import { useState } from 'react';
import Todos from './components/Todos';

const mockTodos = [
  { id: '1', title: 'Ir a comprar la cena', completed: false },
  { id: '2', title: 'Llevar el perro al parque', completed: false },
  { id: '3', title: 'Ir al Gym', completed: false },
];

function App(): JSX.Element {
  const [todos] = useState(mockTodos);
  return (
    <>
      <div className="todoapp">
        {' '}
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
