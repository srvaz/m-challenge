import { Post, SCHEDULE_TYPES } from './types';

import { action } from 'typesafe-actions';

export const addPost = () => action(SCHEDULE_TYPES.ADD_POST);

export const loadPost = () => action(SCHEDULE_TYPES.LOAD_REQUEST);

export const loadSuccess = (data: Post[]) => action(SCHEDULE_TYPES.LOAD_SUCCESS, data);

export const loadFailure = () => action(SCHEDULE_TYPES.LOAD_FAILURE);
