import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import cargoListReducer from '../../reducers/cargo-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return state if no action', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      cargoManifest: {},
      formVisibleOnPage: false
    });
  });
  test('Check initial state of cargoManifest matches root reducer', () => {
    expect(store.getState().cargoManifest).toEqual(cargoListReducer(undefined, { type: null }));
  });
  test('Check initial state of formVisible matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
});