import formVisibleReducer from '../../reducers/form-visible-reducer';

describe("forVisibleReducer", () => {

  test('Should return state if no action recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });
  test('Should toggle form visibility state to true', () => {
    expect(formVisibleReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
  });
  
});