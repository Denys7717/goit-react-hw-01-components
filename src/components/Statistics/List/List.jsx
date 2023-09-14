import css from './List.module.css';
import { RandomColor } from './RandomColor';

export const List = ({ stats }) => {
  return stats.map(statItem => {
    return (
      <>
        <li
          key={statItem.id}
          className={css.item}
          style={{
            backgroundColor: `rgb(${RandomColor()})`,
          }}
        >
          <span className={css.label}>{statItem.label}</span>
          <span className={css.percentage}>{statItem.percentage}%</span>
        </li>
      </>
    );
  });
};
