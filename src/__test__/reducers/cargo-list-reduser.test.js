import cargoListReducer from '../../reducers/cargo-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('cargoListReducer', () => {

  const currentState = {
    1: {
      Name: 'Monster Dog (aka Jadashha)',
      Description: 'Jadashha from Q\'onoS',
      Crates: 8,
      EnergyCredits: 20,
      id: 1
    },
    2: {
      Name: 'Razorbacks',
      Description: 'Brown RazorBack from El-Auria',
      Crates: 10,
      EnergyCredits: 34,
      id: 2
    }
  };

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
      type: c.ADD_CARGO,
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
    });
  });
  test('Should accurately jettison cargo', () => {
    action = {
      type: c.DELETE_CARGO,
      id: 1
    };
    expect(cargoListReducer(currentState, action)).toEqual({
      2: {
        Name: 'Razorbacks',
        Description: 'Brown RazorBack from El-Auria',
        Crates: 10,
        EnergyCredits: 34,
        id: 2
      }
    });
  });
  test('Should accurately change quantity in the cargoManifest', () => {
    const { Name, Description, Crates, EnergyCredits, id } = cargoData;
    action = {
      type: c.QUANTITY_CHANGE,
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
    });
  });
});