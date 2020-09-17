import './MButton.scss';

import React, { Component, MouseEvent } from 'react';

import { getClassList } from '../../assets/ts/utils';

export enum BUTTON_VARIANTS {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINED = 'outlined',
  LINK = 'link',
}

interface props {
  variant?: BUTTON_VARIANTS | null,
  icon?: boolean,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export class MButton extends Component<props> {
  baseClassName = 'm-button';

  render() {
    const { variant, icon, children, onClick } = this.props;

    return (
      <button
        className={getClassList(
          this.baseClassName,
          variant && `${this.baseClassName}--${variant}`,
          icon && `${this.baseClassName}--${icon}`,
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}