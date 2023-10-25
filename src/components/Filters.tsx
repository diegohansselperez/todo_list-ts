import { FILTERS_BTNS, TODO_FILTERS } from '../conts';

interface Props {
  onFilterChange: (
    filter: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS],
  ) => void;
  filterSelected: (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <>
      <ul className="filters">
        {Object.entries(FILTERS_BTNS).map(([key, { href, literal }]) => {
          return (
            <li key={key}>
              <a
                href={href}
                onClick={(event) => {
                  event.preventDefault();
                  onFilterChange(
                    key as (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS],
                  );
                }}
                className={`${filterSelected === key ? 'selected' : ''}`}
              >
                {literal}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Filters;
