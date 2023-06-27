import { useState } from 'react';
import PropTypes from 'prop-types';
import { BoardItem } from '../BoardItem/BoardItem';
import sprite from 'assets/icons/sprite.svg';
import s from './BoardList.module.scss';

export const BoardList = ({ theme, boards }) => {
  const [current, setCurrent] = useState(null);

  return (
    <ul className={s.list}>
      {boards.map(({ title, icon, _id }) => (
        <BoardItem
          key={_id}
          id={_id}
          boardName={title}
          icon={`${sprite}#${icon}`}
          theme={theme}
          isCurrent={current === title && true}
          onClick={() => setCurrent(title)}
        />
      ))}
    </ul>
  );
};

BoardList.propTypes = {
  theme: PropTypes.string.isRequired,
  boards: PropTypes.array,
};
