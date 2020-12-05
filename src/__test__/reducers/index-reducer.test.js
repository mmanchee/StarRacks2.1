import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import cargoListReducer from '../../reducers/cargo-list-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from './../../actions/ActionTypes';

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
  test('Check that ADD_CARGO action work with cargoListReducer and root reducer', () => {
    const action = {
      type: c.ADD_CARGO,
      Name: 'Monster Dog (aka Jadashha)',
      Description: 'Jadashha from Q\'onoS',
      Crates: 8,
      EnergyCredits: 20,
      id: 1
    };
    store.dispatch(action);
    expect(store.getState().cargoManifest).toEqual(cargoListReducer(undefined, action));
  });
  test('Check that TOGGLE_FORM action work with formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    };
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});