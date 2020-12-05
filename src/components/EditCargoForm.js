import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditCargoForm (props) {
  console.log("props E ", props);
  function handleEditCargoFormSubmission(event) {
    event.preventDefault();
    props.onEditCargo({
      Name: event.target.Name.value, 
      Description: event.target.Description.value, 
      Crates: event.target.Crates.value,
      EnergyCredits: event.target.EnergyCredits.value,
      id: props.id
    });
  }
  return (
    <React.Fragment>
      <div className="reusable-input">
        <ReusableForm
          Name={props.Name} 
          Description={props.Description} 
          Crates={parseInt(props.Crates)}
          EnergyCredits={parseInt(props.EnergyCredits)}
          formSubmissionHandler = {handleEditCargoFormSubmission}
          buttonText="Update Cargo" />
      </div>
      
    </React.Fragment>
  );
}

EditCargoForm.propTypes = {
  Name: PropTypes.string.isRequired,
  Description: PropTypes.string,
  Crates: PropTypes.number.isRequired,
  EnergyCredits: PropTypes.number.isRequired,
  id: PropTypes.string,
  onEditCargo: PropTypes.func
};

export default EditCargoForm;