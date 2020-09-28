import { SocialNetwork } from '../../models/SocialNetwork.model';

export interface Post {
  id: number;
  social_networks?: SocialNetwork,
  social_network_key: number[],
  media: string,
  text: string,
  publication_date: string,
  status_key: number,
  schedule_status?: any,
}

export interface SchedulingState {
  readonly data: Post[];
  readonly loading: boolean
  readonly error: boolean
}

export enum SCHEDULE_TYPES {
  LOAD_REQUEST = '@schedules/LOAD_REQUEST',
  ADD_POST = '@schedules/ADD_POST',
  LOAD_SUCCESS = '@schedules/LOAD_SUCCESS',
  LOAD_FAILURE = '@schedules/LOAD_FAILURE',
};
