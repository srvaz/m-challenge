import './LinkedinCard.scss';

import { MText, TEXT_VARIANT } from '../../../../MText';
import React, { Component } from 'react';
import { faCommentAlt, faShareSquare, faThumbsUp } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MCard } from '../../..';
import { PostCardProps } from '../../../../../models/PostCardProps.model';

export default class LinkedinCard extends Component<PostCardProps> {
  renderCardHeader() {
    const { socialNetwork, userName, description } = this.props;

    return (
      <div>
        <div className="m-card__linkedin-header" style={{marginBottom: 16}}>
          <FontAwesomeIcon className="m-card__logo" icon={['fab', socialNetwork.icon]} />
          <div>
            <MText variant={TEXT_VARIANT.TITLE}>
              {userName}
            </MText>
            <MText variant={TEXT_VARIANT.MICRO}>
              06 de Setembro
            </MText>
          </div>
        </div>
        <MText>
          {description}
        </MText>
      </div>
    );
  }

  render() {
    const { media } = this.props;

    return (
      <MCard
        className="m-card--linkedin"
        title={this.renderCardHeader()}
      >
        {
          media
            ? <img src={media} alt="media preview" className="m-card__media-preview"/>
            : <div className="m-card__media-preview" />
        }
        <div className="m-card__footer">
            <MText
              className="m-card__comments-count"
              variant={TEXT_VARIANT.MICRO}
            >
              5 comentários
            </MText>
            <div className="m-card__footer-actions">
              <i className="m-card__post-actions">
                <FontAwesomeIcon icon={faThumbsUp} />
              </i>
              <i className="m-card__post-actions">
                <FontAwesomeIcon icon={faCommentAlt} />
              </i>
              <i className="m-card__post-actions">
                <FontAwesomeIcon icon={faShareSquare} />
              </i>
            </div>
        </div>
      </MCard>
    );
  }
}