import React from "react";
import PropTypes from "prop-types";

function CargoDetail(props){
  const { cargo, onClickingDelete } = props;
  
  function handleChangeCargoCratesButton(cargo, operation, change) {
    change = parseInt(change);
    props.onChangeCargoCratesClick({
      Name: cargo.Name, 
      Description: cargo.Description, 
      Crates: operation ? cargo.Crates === 0 ? 0 : 
        cargo.Crates = parseInt(cargo.Crates) - change : 
        (parseInt(cargo.Crates) + change) > 32 ? cargo.Crates = 32 :
          cargo.Crates = parseInt(cargo.Crates) + change, 
      EnergyCredits: cargo.EnergyCredits,
      id: cargo.id      
    });
  }

  return (
    <React.Fragment>
      <h1>Cargo Detail</h1>
      <p>Name: {cargo.Name}<br />
      Description: {cargo.Description}<br />
      Crates: {cargo.Crates}<br />
      Energy Credits: {cargo.EnergyCredits} E</p>
      <button onClick = {()=> handleChangeCargoCratesButton(cargo, true, 1) }>Trade</button> {/* reduce */}
      <button onClick = {()=> handleChangeCargoCratesButton(cargo, false, 1)  }>Stock +1</button> {/* increase */}
      <button onClick = {()=> handleChangeCargoCratesButton(cargo, false, 8)  }>Stock +8</button> {/* increase */}
      <button onClick = { props.onClickingEdit }>Update Cargo</button>
      <button onClick = {() => onClickingDelete(cargo.id) }>Jettison Cargo</button>
      <hr/>
    </React.Fragment>
  );
}

CargoDetail.propTypes = {
  cargo: PropTypes.object,
  onChangeCargoCratesClick: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CargoDetail;