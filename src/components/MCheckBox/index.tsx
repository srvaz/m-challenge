import './MCheckBox.scss';

import React, { ChangeEvent, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { getClassList } from '../../assets/ts/utils';

interface props {
  icon: IconName
  disabled?: boolean,
  value?: any,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export class MCheckbox extends Component<props> {
  state = {
    isChecked: false,
  }

  handleCheck = () => {
    this.setState({ isChecked: !this.state.isChecked});
  }

  render() {
    const { icon, disabled, value, onChange } = this.props;
    const { isChecked } = this.state;
    return (
      <div className={getClassList(
        'm-checkbox',
        isChecked && 'm-checkbox--checked',
        disabled && 'm-checkbox--disabled'
      )}>
        <input
          type="checkbox"
          checked={isChecked}
          value={value}
          onClick={this.handleCheck}
          onChange={onChange}
        />
        <FontAwesomeIcon
          className="m-checkbox__icon"
          icon={['fab', icon]}
        />
      </div>
    );
  }
}
