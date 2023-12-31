import { Stats } from './Stats/Stats';
import css from './Profile.module.css';

export const Profile = ({ username, location, tag, stats, avatar }) => {
  return (
    <>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt={username} className={css.avatar} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className="location">{location}</p>
        </div>
        <ul className={css.stats}>
          <Stats stats={stats} />
        </ul>
      </div>
    </>
  );
};
