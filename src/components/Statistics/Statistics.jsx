import { List } from './List/List';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.statList}>
          <List stats={stats} />
        </ul>
      </section>
    </>
  );
};
