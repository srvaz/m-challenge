import './MTimePicker.scss';

import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TimePicker from 'react-time-picker';
import { faClock } from '@fortawesome/free-solid-svg-icons';

interface props {
  value: Date,
  onChange?: any,
}

export class MTimePicker extends Component<props> {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="m-time-picker">
        <TimePicker
          clockIcon={<FontAwesomeIcon icon={faClock} />}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}
