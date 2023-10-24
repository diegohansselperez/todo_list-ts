import { type Todo as TodoType } from '../types';

type Props = TodoType;

const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={() => {}}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => {}}></button>
    </div>
  );
};

export default Todo;
