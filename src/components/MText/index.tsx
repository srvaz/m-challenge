import './MText.scss';

import React, { Component, ElementType } from 'react';

import { getClassList } from '../../assets/ts/utils';

export enum TEXT_VARIANT {
  DEFAULT = 'default',
  MICRO = 'micro',
  TITLE = 'title',
  SUBTITLE = 'subtitle'
}

interface props {
  variant?: TEXT_VARIANT,
  tag?: ElementType
  className?: string,
}

export class MText extends Component<props> {
  baseClassName = 'm-text';

  render() {
    const { variant, tag, children, className } = this.props;
    const CustomTag = tag || 'p';

    return (
      <CustomTag
        className={getClassList(
          className,
          this.baseClassName,
          variant && `${this.baseClassName}--${variant}`
        )}
      >
        {children}
      </CustomTag>
    )
  }
}
