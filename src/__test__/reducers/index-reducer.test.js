import rootReducer from '../../reducers/index';

describe("rootReducer", () => {

  test('Should return state if no action', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      cargoManifest: {},
      formVisibleOnPage: false
    });
  });
  
});