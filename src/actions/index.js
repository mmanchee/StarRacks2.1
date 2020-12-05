import * as c from './ActionTypes';

export const deleteCargo = id => ({
  type: c.DELETE_CARGO,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addCargo = (cargo) => {
  const { Name, Description, Crates, EnergyCredits, id } = cargo;
  return {
    type: c.ADD_CARGO,
    Name: Name,
    Description: Description,
    Crates: Crates,
    EnergyCredits: EnergyCredits,
    id: id
  };
};
export const quantityChange = (cargo) => {
  const { Name, Description, Crates, EnergyCredits, id } = cargo;
  return {
    type: c.QUANTITY_CHANGE,
    Name: Name,
    Description: Description,
    Crates: Crates,
    EnergyCredits: EnergyCredits,
    id: id
  };
};