import './Mstatus.scss';

import React, { Component, HTMLAttributes } from 'react';

import { MText } from '../MText';
import { Status } from '../../models/status';

interface props {
  status: Status,
}

export class MStatus extends Component<props & HTMLAttributes<HTMLDivElement>> {
  render() {
    const { status } = this.props;

    return (
      <div className="m-status">
        <span
          className="m-status__badge"
          style={{ background: status.color }}
        />
        <MText>{status.name}</MText>
      </div>
    );
  }
}
