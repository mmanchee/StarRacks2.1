import React from "react";
import Cargo from './Cargo';
import PropTypes from 'prop-types';


function CargoList(props) {
  return (
    <React.Fragment>
      <div className="table-h-name">Name</div>
      <div className="table-h-other">Crates</div>
      <div className="table-h-other">Total E</div>
      <div className="box">
        <div className="inner-box">
          {Object.values(props.cargoList).map((cargo) => 
            <Cargo
              whenCargoClicked = {props.onCargoSelection}
              Name={cargo.Name}
              Description={cargo.Description}
              Crates={parseInt(cargo.Crates)}
              EnergyCredits={parseInt(cargo.EnergyCredits)}
              id={cargo.id}
              key={cargo.id}/>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

CargoList.propTypes = {
  cargoList: PropTypes.object,
  onCargoSelection: PropTypes.func
};

export default CargoList;