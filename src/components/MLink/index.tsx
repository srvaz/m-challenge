import './MLink.scss'

import React, { Component, HTMLAttributes } from 'react';

interface props {
  to?: string;
}

export class MLink extends Component<props & HTMLAttributes<HTMLAnchorElement>> {
  render() {
    const { children, to, className } = this.props;
    return (
      <a
        href={to}
        className={`m-link ${className}`}
      >
        {children}
      </a>
    )
  }
}