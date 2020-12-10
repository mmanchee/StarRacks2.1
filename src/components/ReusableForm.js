import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='Name'
          Value={props.Name}
          placeholder='Enter a Name' 
          required />
        <br />
        <textarea
          type='text'
          name='Description'
          defaultValue={props.Description ? props.Description : ""}
          placeholder='Enter a Description' 
          required />
        <br />
        <input
          type='number'
          name='Crates'
          min='0'
          max='32'
          defaultValue={parseInt(props.Crates) ? parseInt(props.Crates) : ""}
          placeholder='Enter the Number Crates' 
          required /> 
        <br />
        <input
          type='number'
          name='EnergyCredits'
          defaultValue={parseInt(props.EnergyCredits) ? parseInt(props.EnergyCredits) : ""}
          placeholder='Enter Energy Credits Cost' 
          required /> E
        <br />
        <button type ='submit'>{props.buttonText}</button>
        {/* Add cancel button */}
      </form>
    </React.Fragment>
  );
}
  
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  EnergyCredits: PropTypes.number,
  Name: PropTypes.string,
  Description: PropTypes.string,
  Crates: PropTypes.number,
};
  
export default ReusableForm;