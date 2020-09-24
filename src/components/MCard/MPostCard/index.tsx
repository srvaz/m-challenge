import React, { Component, Suspense, lazy } from 'react';

import { PostCardProps } from '../../../models/PostCardProps.model';

export class MPostCard extends Component<PostCardProps> {
  private getCardLayout = () => {
    const { socialNetwork } = this.props;
    let CardLayout;

    switch(socialNetwork.name) {
      case 'Instagram':
        CardLayout = lazy(() => import('./socialNetwork/instagram'));
        break;
      case 'Linkedin':
        CardLayout = lazy(() => import('./socialNetwork/linkedin'));
        break;
      default:
        CardLayout = lazy(() => import('./socialNetwork/instagram'));
    }

    return (
      <Suspense fallback={<span />}>
        <CardLayout {...this.props} />
      </Suspense>
    )
  }

  render() {
    return this.getCardLayout();
  }
}
