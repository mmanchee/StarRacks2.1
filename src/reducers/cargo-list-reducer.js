import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { Name, Description, Crates, EnergyCredits, id } = action;
  switch (action.type) {
  case c.ADD_CARGO:
    return Object.assign({}, state, {
      [id]: {
        Name: Name,
        Description: Description,
        Crates: Crates,
        EnergyCredits: EnergyCredits,
        id: id
      }
    });
  case c.DELETE_CARGO:
    const newState = { ...state };
    delete newState[id];
    return newState;
  case c.QUANTITY_CHANGE:
    return Object.assign({}, state, {
      [id]: {
        Name: Name,
        Description: Description,
        Crates: Crates,
        EnergyCredits: EnergyCredits,
        id: id
      }
    })
  default:
    return state;
  }
};

