import { combineReducers } from '@reduxjs/toolkit';
import schedules from './schedules';
import socialNetworks from './socialNetworks';

export default combineReducers({
  schedules,
  socialNetworks,
});