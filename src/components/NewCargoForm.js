import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import ReusableForm from "./ReusableForm";

function NewCargoForm(props) {

  function handleNewCargoFormSubmission(event) {
    event.preventDefault();
    props.onNewCargoCreation({
      Name: event.target.Name.value, 
      Description: event.target.Description.value, 
      Crates: event.target.Crates.value === "" || event.target.Crates.value < 0 ? 0 : event.target.Crates.value,
      EnergyCredits: event.target.EnergyCredits.value,
      id:v4()});
  }

  return (
    <React.Fragment>
      <div className="reusable-input">
        <ReusableForm
          formSubmissionHandler = {handleNewCargoFormSubmission}
          buttonText = "Add Cargo" />
      </div>
    </React.Fragment>
  );
}

NewCargoForm.propTypes = {
  onNewCargoCreation: PropTypes.func
};

export default NewCargoForm;