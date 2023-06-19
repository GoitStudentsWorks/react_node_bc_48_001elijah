import s from './BoardItem.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import sprite from '../../../assets/icons/sprite.svg';

const BoardItem = ({ boardName, icon, theme, current }) => {
  return (
    <li className={clsx(s.item, s[theme], current && s.current)}>
      <div className={s.projectNameWrapper}>
        <svg className={clsx(s.iconProject, s[theme])}>
          <use href={icon}></use>
        </svg>
        <span className={clsx(s.text, s[theme])}>{boardName}</span>
      </div>
      <ul className={clsx(s.iconList, s[theme])}>
        <li>
          <svg className={clsx(s.actionIcon, s[theme])}>
            <use href={`${sprite}#icon-pencil`}></use>
          </svg>
        </li>
        <li>
          <svg className={clsx(s.actionIcon, s[theme])}>
            <use href={`${sprite}#icon-trash`}></use>
          </svg>
        </li>
      </ul>
    </li>
  );
};

BoardItem.propTypes = {
  boardName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  current: PropTypes.bool,
};

export default BoardItem;
