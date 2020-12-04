import formVisibleReducer from '../../reducers/form-visible-reducer';

describe("forVisibleReducer", () => {

  test('Should return state if no action recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

});