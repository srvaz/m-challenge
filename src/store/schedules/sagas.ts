import { call, put } from 'redux-saga/effects';
import { loadFailure, loadSuccess } from './actions';

import api from '../../services/api';

export function* load() {
  try {
    const response = yield call(api.get, 'posts');

    yield put(loadSuccess(response.data));
  } catch (error) {
    yield put(loadFailure());
  }
}
