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
        <FontAwesomeIcon className="m-card__logo" icon={['fab', socialNetwork.icon]} />
        <MText variant={TEXT_VARIANT.TITLE}>
          {userName} teste
        </MText>
      </div>
    );
  }

  render() {
    const { description, media } = this.props;
    return (
      <MCard
        className="m-card--instagram"
        title={this.renderCardHeader()}
      >
        {
          media
            ? <img src={media} alt="media preview" className="m-card__media-preview"/>
            : <div className="m-card__media-preview" />
        }
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
