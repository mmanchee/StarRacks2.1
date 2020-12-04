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
});