import './MDatePicker.scss';

import React, { Component } from 'react';

import DatePicker from 'react-date-picker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

interface props {
  value: Date,
  onChange?: any,
}

export class MDatePicker extends Component<props> {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="m-date-picker">
        <DatePicker
          calendarIcon={<FontAwesomeIcon icon={faCalendarAlt} />}
          format="dd/MM"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}
