import { all, takeLatest } from 'redux-saga/effects';

import { SCHEDULE_TYPES } from './schedules/types';
import { SOCIAL_NETWORK_TYPES } from './socialNetworks/types';
import { load as loadPost } from './schedules/sagas';
import { load as loadSocialNetwork } from './socialNetworks/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(SCHEDULE_TYPES.LOAD_REQUEST, loadPost),
    takeLatest(SOCIAL_NETWORK_TYPES.LOAD_REQUEST, loadSocialNetwork),
  ]);
}
