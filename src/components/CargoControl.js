import React from "react";
import CargoList from "./CargoList";
import EditCargoForm from "./EditCargoForm";
import NewCargoForm from "./NewCargoForm";
import CargoDetail from './CargoDetail';
import { connect } from 'react-redux';


class CargoControl extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      cargoManifest: [],
      selectedCargo: null,
      editing: false
    };
  }
  //event handlers
  // Edit
  handleEditingCargoInManifest = (cargoToEdit) => { // editing cargo in actual array
    const editedCargoManifest = this.state.cargoManifest
      .filter(cargo => cargo.id !== this.state.selectedCargo.id)
      .concat(cargoToEdit);
    this.setState({
      cargoManifest: editedCargoManifest,
      editing: false,
      selectedCargo: null
    });
  }
  handleEditClick = () => { // sets cargo to edit
    this.setState({editing: true});
  }
  // Delete
  handleDeletingCargo = (id) => { /// deletes cargo from array
    const newCargoManifest = this.state.cargoManifest
      .filter(cargo => cargo.id !== id);
    this.setState({
      cargoManifest: newCargoManifest,
      selectedCargo: null
    });
  }

  handleClick = () => {  // sets state to normal
    if (this.state.selectedCargo != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCargo: null,
        editing: false
      });
    } else {
      if(this.state.cargoManifest.length < 20) {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
      }
    }
  }
  // Detail
  handleChangingSelectedCargo = (id) => { // view cargo in Detail
    const selectedCargo = this.state.cargoManifest
      .filter(cargo => cargo.id === id)[0];
    this.setState({selectedCargo});
  }
  //Create
  handleAddingNewCargoToManifest = (newCargo) => { // adds new cargo to Array
    const newCargoManifest = this.state.cargoManifest
      .concat(newCargo);
    this.setState({
      cargoManifest: newCargoManifest,
      formVisibleOnPage: false
    });
  }

  handleChangeCargoCratesClick =  (cargoToEdit) => {
    const editedCargoManifest = this.state.cargoManifest
      .filter(cargo => cargo.id !== this.state.selectedCargo.id)
      .concat(cargoToEdit);
    this.setState({
      cargoManifest: editedCargoManifest,
    });
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
    } else if (this.state.formVisibleOnPage) { // catch is set
      currentlyVisibleState = <NewCargoForm 
        onNewCargoCreation={this.handleAddingNewCargoToManifest} 
      />;
      buttonText = "Return to Cargo Manifest";
    } else {                                // default
      currentlyVisibleState = <CargoList 
        Cargos={this.state.cargoManifest} 
        onCargoSelection={this.handleChangingSelectedCargo} 
      />;
      if (this.state.cargoManifest.length > 19) {
        buttonText = "Cargo Bay if Full";
      } else {
        buttonText = "Add Cargo";
      }
    }
    
    return (
      <React.Fragment>
        <div className="nav-button">
          <button onClick={this.handleClick}>{buttonText}</button>
        </div>
        {currentlyVisibleState}
        {this.state.cargoManifest.length === 0 && 
          currentlyVisibleState.props.Cargos !== undefined ? "There are no cargos currently on the ship" : ""}
      </React.Fragment>
    );
  }
}

CargoControl.propTypes = {
  cargoManifest: PropTypes.object
};

const mapStoreToProps = state => {
  return {
    cargoManifest: state.cargoManifest,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

CargoControl = connect(mapStoreToProps)(CargoControl);

export default CargoControl;