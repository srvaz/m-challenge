import './Home.scss';

import { BUTTON_VARIANTS, MButton } from '../../components/MButton';

import React from 'react';
import illustration from '../../assets/img/post_illustration.svg';
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  const handleClick = () => history.push('/scheduling');

  return (
    <div className="page-home">
      <img
        className="page-home__illustration"
        src={illustration}
        alt="post illustration"
      />
        <MButton
          className="page-home__button"
          variant={BUTTON_VARIANTS.SECONDARY}
          onClick={handleClick}
        >
          Agendar post
        </MButton>
    </div>
  )
};
