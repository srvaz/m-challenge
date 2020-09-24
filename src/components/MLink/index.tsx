import './MLink.scss';

import React, { Component, HTMLAttributes } from 'react';

import { Link } from 'react-router-dom';

interface props {
  to: string;
}

export class MLink extends Component<props & HTMLAttributes<HTMLAnchorElement>> {
  render() {
    const { children, to, className } = this.props;
    return (
      <Link
        to={to}
        className={`m-link ${className}`}
      >
        {children}
      </Link>
    )
  }
}