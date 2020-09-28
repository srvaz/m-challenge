import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface SocialNetwork {
  id: number,
  name: string,
  icon: IconName,
  status: string,
}

export interface SocialNetworkState {
  readonly data: SocialNetwork[];
  readonly loading: boolean
  readonly error: boolean
}

export enum SOCIAL_NETWORK_TYPES {
  LOAD_REQUEST = '@socialNetwork/LOAD_REQUEST',
  LOAD_SUCCESS = '@socialNetwork/LOAD_SUCCESS',
  LOAD_FAILURE = '@socialNetwork/LOAD_FAILURE',
};
