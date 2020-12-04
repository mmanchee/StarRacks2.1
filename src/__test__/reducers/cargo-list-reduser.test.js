import cargoListReducer from '../../reducers/cargo-list-reducer';

describe('cargoListReducer', () => {
  test('Should return state if no action is passed to the reducer', () => {
    expect(cargoListReducer({}, { type: null })).toEqual({});
  });
});