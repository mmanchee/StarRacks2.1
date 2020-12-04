import cargoListReducer from '../../reducers/cargo-list-reducer';

describe('cargoListReducer', () => {

  let action;
  const cargoData = {
    Name: 'Cats',
    Description: 'Orange Cat from Zanthi',
    Crates: 8,
    EnergyCredits: 20,
    id: 1
  };

  test('Should return state if no action is passed to the reducer', () => {
    expect(cargoListReducer({}, { type: null })).toEqual({});
  });

  test('Should accurately add new cargo to the cargoManifest', () => {
    const { Name, Description, Crates, EnergyCredits, id } = cargoData;
    action = {
      type: 'ADD_CARGO',
      Name: Name,
      Description: Description,
      Crates: Crates,
      EnergyCredits: EnergyCredits,
      id: id
    };

    expect(cargoListReducer({}, action)).toEqual({
      [id]: {
        Name: Name,
        Description: Description,
        Crates: Crates,
        EnergyCredits: EnergyCredits,
        id: id
      }
    })
  })
});