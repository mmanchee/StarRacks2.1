import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from './../../actions/ActionTypes';

describe("forVisibleReducer", () => {

  test('Should return state if no action recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });
  test('Should toggle form visibility state to true', () => {
    expect(formVisibleReducer(false, { type: c.TOGGLE_FORM })).toEqual(true);
  });

});