import React from "react";
import CargoList from "./CargoList";
import EditCargoForm from "./EditCargoForm";
import NewCargoForm from "./NewCargoForm";
import CargoDetail from './CargoDetail';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';

class CargoControl extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      selectedCargo: null,
      editing: false
    };
  }
  //event handlers
  // Edit
  handleEditingCargoInManifest = (cargoToEdit) => { // editing cargo in actual array
    const { dispatch } = this.props;
    const action = a.addCargo(cargoToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedCargo: null
    });
  }
  handleEditClick = () => { // sets cargo to edit
    this.setState({editing: true});
  }
  // Delete
  handleDeletingCargo = (id) => { /// deletes cargo from array
    const { dispatch } = this.props;
    const action = a.deleteCargo(id);
    dispatch(action);
    this.setState({ selectedCargo: null });
  }

  handleClick = () => {  // sets state to normal
    if (this.state.selectedCargo != null) {
      this.setState({
        selectedCargo: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }
  // Detail
  handleChangingSelectedCargo = (id) => { // view cargo in Detail
    const selectedCargo = this.props.cargoManifest[id];
    this.setState({selectedCargo: selectedCargo});
  }
  //Create
  handleAddingNewCargoToManifest = (newCargo) => { // adds new cargo to Array
    const { dispatch } = this.props;
    const action = a.addCargo(newCargo);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangeCargoCratesClick =  (cargoToEdit) => {
    const { dispatch } = this.props;
    const action = a.quantityChange(cargoToEdit);
    dispatch(action);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) { // edit
      currentlyVisibleState = <EditCargoForm 
        cargo = {this.state.selectedCargo} 
        onEditCargo =  {this.handleEditingCargoInManifest}
      />;
      buttonText = "Return to Cargo Manifest";
    } else if (this.state.selectedCargo !== null) { // delete and edit
      currentlyVisibleState = <CargoDetail 
        cargo = {this.state.selectedCargo} 
        onClickingDelete = {this.handleDeletingCargo} 
        onClickingEdit = {this.handleEditClick}
        onChangeCargoCratesClick = {this.handleChangeCargoCratesClick} 
      />;
      buttonText = "Return to Cargo Manifest";
    } else if (this.props.formVisibleOnPage) { // catch is set
      currentlyVisibleState = <NewCargoForm 
        onNewCargoCreation={this.handleAddingNewCargoToManifest} 
      />;
      buttonText = "Return to Cargo Manifest";
    } else {                                // default
      currentlyVisibleState = <CargoList 
        cargoList={this.props.cargoManifest} 
        onCargoSelection={this.handleChangingSelectedCargo} 
      />;
      if (this.props.cargoManifest.length > 19) {
        buttonText = "Cargo Bay if Full";
      } else {
        buttonText = "Add Cargo";
      }
    }
    console.log("count ", this.props.cargoManifest.length, " props ", this.props)
    return (
      <React.Fragment>
        <div className="nav-button">
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
        {currentlyVisibleState}
        {this.props.cargoManifest.length === 0 && 
          currentlyVisibleState.props.Cargos !== undefined ? "There are no cargos currently on the ship" : ""}
      </React.Fragment>
    );
  }
}

CargoControl.propTypes = {
  cargoManifest: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStoreToProps = state => {
  return {
    cargoManifest: state.cargoManifest,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

CargoControl = connect(mapStoreToProps)(CargoControl);

export default CargoControl;