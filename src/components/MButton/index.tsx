import './MButton.scss';

import React, { Component, HTMLAttributes } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
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
  icon?: IconProp,
  disabled?: boolean,
}

export class MButton extends Component<props & HTMLAttributes<HTMLButtonElement>> {
  baseClassName = 'm-button';

  render() {
    const { variant, icon, children, onClick, className, disabled } = this.props;

    return (
      <button
        className={getClassList(
          className,
          this.baseClassName,
          variant && `${this.baseClassName}--${variant}`,
          icon && `${this.baseClassName}--icon`,
          disabled && `${this.baseClassName}--disabled`,
        )}
        aria-label={children?.toString()}
        onClick={onClick}
      >
        {
          icon
            ? <FontAwesomeIcon icon={icon} size='lg' />
            : children
        }
      </button>
    );
  }
}