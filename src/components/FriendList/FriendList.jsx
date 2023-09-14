import { Friends } from './Friend/Friend';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendList}>
        <Friends arrayOfFriends={friends} />
      </ul>
    </>
  );
};
