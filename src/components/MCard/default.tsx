import './MCard.scss';

import React, { Component, HTMLAttributes } from 'react';

interface props {
  title?: Element | any,
}

export class MCardDefault extends Component<props & HTMLAttributes<HTMLDivElement>> {
  render() {
    const { children, className, title } = this.props;

    return (
      <div className={`m-card ${className}`}>
        <div className="m-card__title">
          {title}
        </div>
        <div className="m-card__content">
          {children}
        </div>
      </div>
    );
  }
}
