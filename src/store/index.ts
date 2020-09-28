import { Store, applyMiddleware, createStore } from '@reduxjs/toolkit';

import { SchedulingState } from './schedules/types';
import { SocialNetworkState } from './socialNetworks/types';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export interface ApplicationState {
  schedules: SchedulingState,
  socialNetworks: SocialNetworkState,
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
