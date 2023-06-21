import { ModalColumn } from 'components/ModalColumn/ModalColumn';
import PropTypes from 'prop-types';
import s from './ModalCard.module.scss';
import { useState } from 'react';
import { BoxRadioColorGroup } from 'components/BoxRadioColorGroup/BoxRadioColorGroup';
import { SelectData } from 'components/SelectData/SelectData';

export const ModalCard = ({
  inputTitle,
  titleModalButton,
  onClick,
  handleToggleModal,
}) => {
  const [coment, setComent] = useState('');
  const [isColor, setIsColor] = useState('dark');
  const [date, setDate] = useState('');
  // const [isBack, setIsBack] = useState('dark');
  // const [icon, setIcon] = useState('');
  const handleAddCard = value => {
    const newCard = {
      value,
      coment: coment,
      color: isColor,
      date,
    };
    onClick(newCard);
  };

  // const handleChangeBackground = value => {
  //   setIsBack(value);
  // };

  const handleChangeColor = value => {
    setIsColor(value);
  };

  return (
    <ModalColumn
      inputTitle={inputTitle}
      titleModalButton={titleModalButton}
      onClick={handleAddCard}
      handleToggleModal={handleToggleModal}
    >
      <textarea
        onChange={e => setComent(e.target.value)}
        className={s.description}
        name="coments"
        id="coments"
        placeholder="Description"
        value={coment}
      ></textarea>
      <BoxRadioColorGroup valueChange={handleChangeColor} />
      {/* <SelectData onDate={setDate} /> */}
    </ModalColumn>
  );
};

ModalCard.propTypes = {
  inputTitle: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
