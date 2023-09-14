import css from './Stats.module.css';

export const Stats = ({ stats }) => {
  let arr = [];

  for (let key in stats) {
    arr.push(
      <li key={key}>
        <span className={css.label}>{key}</span>
        <span className={css.quantity}>{stats[key]}</span>
      </li>
    );
  }
  return arr;
};
