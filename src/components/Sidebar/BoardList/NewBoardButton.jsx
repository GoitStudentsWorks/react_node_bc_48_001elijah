import s from './NewBoardButton.module.scss';
import sprite from '../../../assets/icons/sprite.svg';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const NewBoardButton = ({ theme }) => {
  return (
    <button type="button" className={clsx(s.button, s[theme])}>
      <span className={clsx(s.text, s[theme])}>
        Create a <br /> new board
      </span>
      <div className={clsx(s.iconWrapper, s[theme])}>
        <svg className={clsx(s.icon, s[theme])}>
          <use href={`${sprite}#icon-plus`}></use>
        </svg>
      </div>
    </button>
  );
};

NewBoardButton.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default NewBoardButton;
