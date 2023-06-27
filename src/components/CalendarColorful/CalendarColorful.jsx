import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getMonth, getYear } from 'date-fns';
import s from './CalendarColorful.module.scss';
import PropTypes from 'prop-types';
import { CalendarButton } from '../CalendarButton/CalendarButton';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const CalendarColorful = ({ onDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  useEffect(() => {
    onDate(startDate);
  }, [onDate, startDate]);

  return (
    <DatePicker
      dateFormat=", yy, MMMM d"
      selected={startDate}
      calendarClassName={s.calendarConatiner}
      popperClassName={s.popperCustomClass}
      // formatWeekDay={day => day.substr(0, 2)}
      customInput={
        <CalendarButton
          onClick={e => {
            console.log(e.target);
          }}
        />
      }
      onChange={date => setStartDate(date)}
      minDate={new Date()}
      wrapperClassName={s.calendar}
      weekNumber={5}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className={s.headerWrapper}>
          <button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            type="button"
          >
            {'<'}
          </button>
          <div>
            <span>
              {getYear(date)} {months[getMonth(date)]}
            </span>
          </div>
          <button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            type="button"
          >
            {'>'}
          </button>
        </div>
      )}
    />
  );
};

CalendarColorful.propTypes = {
  onDate: PropTypes.func,
};
