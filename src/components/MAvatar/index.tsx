import './MAvatar.scss';

import React, { Component } from 'react';

interface props {
  img?: string;
  name: string;
}

export class MAvatar extends Component<props> {
  getInitials = (name: string): string => name[0];

  render() {
    const { img, name } = this.props;
    return (
      <div className="m-avatar">
        {
          img
            ? <img src={img} alt={name} className="m-avatar__img"/>
            : <span className="m-avatar__initials" aria-label={name}>{this.getInitials(name)}</span>
        }
      </div>
    )
  }
}