import { combineReducers } from 'redux';
import cargoListReducer from './cargo-list-reducer';
import formVisibleReducer from './form-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cargoManifest: cargoListReducer,
  formVisibleOnPage: formVisibleReducer
});

export default rootReducer;