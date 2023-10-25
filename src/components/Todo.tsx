import React from 'react';
import { type Todo as TodoType } from '../types';

// type Props = TodoType;

interface Props extends TodoType {
  onRemoveTodo: (id: string) => void;
  onHandleCompleted: (id: string, completed: boolean) => void;
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onHandleCompleted,
}) => {
  const handleChangeCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    onHandleCompleted(id, e.target.checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo(id);
        }}
      ></button>
    </div>
  );
};

export default Todo;
