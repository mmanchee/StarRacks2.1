export const deleteCargo = id => ({
  type: 'DELETE_CARGO',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addCargo = (cargo) => {
  const { Name, Description, Crates, EnergyCredits, id } = cargo;
  return {
    type: 'ADD_CARGO',
    Name: Name,
    Description: Description,
    Crates: Crates,
    EnergyCredits: EnergyCredits,
    id: id
  }
}