import './InstagramCard.scss';

import { MText, TEXT_VARIANT } from '../../../../MText';
import React, { Component } from 'react';
import { faBookmark, faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MCard } from '../../..';
import { PostCardProps } from '../../../../../models/PostCardProps.model';

export default class InstagramCard extends Component<PostCardProps> {
  renderCardHeader() {
    const { socialNetwork, userName } = this.props;

    return (
      <div className="m-card__instagram-header">
        <img src={socialNetwork.icon} alt="Instagram logo" className="m-card__logo"/>
        <MText variant={TEXT_VARIANT.TITLE}>
          {userName}
        </MText>
      </div>
    );
  }

  render() {
    const { description } = this.props;
    return (
      <MCard
        className="m-card--instagram"
        title={this.renderCardHeader()}
      >
        <img src="https://picsum.photos/368" alt="media preview" className="m-card__media-preview"/>
        <div className="m-card__footer">
          <div className="m-card__footer-actions">
            <i className="m-card__post-actions">
              <FontAwesomeIcon icon={faHeart} aria-label="Instagram like" />
            </i>
            <i className="m-card__post-actions">
              <FontAwesomeIcon icon={faComment} aria-label="Instagram comments" />
            </i>
            <i className="m-card__post-actions">
              <FontAwesomeIcon icon={faBookmark} aria-label="Instagram archives" />
            </i>
          </div>
          <MText>{description}</MText>
        </div>
      </MCard>
    );
  }
}
