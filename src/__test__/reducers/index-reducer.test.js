import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import cargoListReducer from './cargo-list-reducer';
import formVisibleReducer from './form-visible-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return state if no action', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      cargoManifest: {},
      formVisibleOnPage: false
    });
  });
  test('Check initial state matches root reducer', () => {
    expect(store.getState().cargoManifest).toEqual(cargoListReducer(undefined, { type: null }));
  });

});