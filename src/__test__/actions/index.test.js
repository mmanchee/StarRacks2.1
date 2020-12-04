import * as actions from './../../actions';

describe('cargo actions', () => {
  it('deleteCargo should create DELETE_CARGO action', () => {
    expect(actions.deleteCargo(1)).toEqual({
      type: 'DELETE_CARGO',
      id: 1
    });
  });
  it('toggleForm should creat TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addCargo should create ADD_CARGO action', () => {
    expect(actions.addCargo({ 
      Name: 'Monster Dog (aka Jadashha)',
      Description: 'Jadashha from Q\'onoS',
      Crates: 8,
      EnergyCredits: 20,
      id: 1
    })).toEqual({
      type: 'ADD_CARGO',
      Name: 'Monster Dog (aka Jadashha)',
      Description: 'Jadashha from Q\'onoS',
      Crates: 8,
      EnergyCredits: 20,
      id: 1
    });
  });

  it('quantityChange should change QUANTITY_CHANGE action', () => {
    expect(actions.quantityChange({ 
      Name: 'Monster Dog (aka Jadashha)',
      Description: 'Jadashha from Q\'onoS',
      Crates: 10,
      EnergyCredits: 20,
      id: 1
    })).toEqual({
      type: 'QUANTITY_CHANGE',
      Name: 'Monster Dog (aka Jadashha)',
      Description: 'Jadashha from Q\'onoS',
      Crates: 10,
      EnergyCredits: 20,
      id: 1
    });
  });
});