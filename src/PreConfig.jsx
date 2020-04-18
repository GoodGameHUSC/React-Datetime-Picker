import React from 'react';
import Picker from './Picker.jsx';

export default function PreConfigDateTimePicker({
  moment,
  handleChange
}) {
  return <Picker
    moment={moment}
    onChange={handleChange}
    weeks={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
    months={['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']}
    dayFormat={'MMMM YYYY'}
    minDate={moment().add(1, 'days')}
    closeOnSelectDay={true}
    showTimePicker={false}
  />;
}