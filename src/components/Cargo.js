import React from "react";
import PropTypes from 'prop-types';

function Cargo(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCargoClicked(props.id)}>
        <div className="table-row">
          <div>
            <div className="table-name">{props.Name}</div> 
            <div className="table-other">{parseInt(props.Crates) === 0 ? "Out of Stock" : parseInt(props.Crates)}</div>
            <div className="table-other">{parseInt(props.EnergyCredits) * parseInt(props.Crates)}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Cargo.propTypes = {
  Name: PropTypes.string.isRequired,
  Description: PropTypes.string,
  Crates: PropTypes.number.isRequired,
  EnergyCredits: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenCargoClicked: PropTypes.func
};

export default Cargo;