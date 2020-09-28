import { SOCIAL_NETWORK_TYPES, SocialNetwork } from './types';

import { action } from 'typesafe-actions';

export const loadSocialNetwork = () => action(SOCIAL_NETWORK_TYPES.LOAD_REQUEST);

export const loadSuccess = (data: SocialNetwork[]) => action(SOCIAL_NETWORK_TYPES.LOAD_SUCCESS, data);

export const loadFailure = () => action(SOCIAL_NETWORK_TYPES.LOAD_FAILURE);
