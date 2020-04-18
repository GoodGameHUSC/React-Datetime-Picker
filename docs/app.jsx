import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';

import { DatetimePicker, DatetimePickerTrigger } from '../dist/rc-datetime-picker';
import './app.less';


class InlinePicker extends Component {
  constructor() {
    super();
    this.state = {
      time: moment()
    };
  }

  handleChange = (time) => {
    this.setState({
      time
    });
  }

  render() {
    const { time } = this.state;

    return (
      <div>
        <span className="text">Datetime: {time.format('YYYY/MM/DD HH:mm')}</span>
        <DatetimePicker
          moment={time}
          onChange={this.handleChange}
          minDate={moment().add(1, 'days')}
          closeOnSelectDay={true}
          showTimePicker={false}
        />
      </div>
    );
  }
}

class PopupPicker extends Component {
  constructor() {
    super();
    this.state = {
      datetime: moment()
    };
  }

  handleChange = (moment) => {
    this.setState({
      datetime: moment
    });
  }

  render() {
    const shortcuts = {
      'Today': moment(),
      'Yesterday': moment().subtract(1, 'days'),
      'Clear': ''
    };
    const { datetime } = this.state;
    const value = datetime ? datetime.format('YYYY/MM/DD HH:mm') : '';

    return (
      <DatetimePickerTrigger
        shortcuts={shortcuts}
        moment={datetime}
        onChange={this.handleChange}
      >
        <input type="text" value={value} readOnly />
        <span className="fa fa-calendar-o"></span>
      </DatetimePickerTrigger>
    );
  }
}

render(
  <InlinePicker />,
  document.getElementById('inline-picker')
);

render(
  <PopupPicker />,
  document.getElementById('popup-picker')
);

