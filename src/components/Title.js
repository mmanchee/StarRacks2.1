import React from "react";
import { useHistory } from 'react-router-dom';

function Title() {

  const history = useHistory();

  function clickToCargo() {
    history.push('/CargoControl')
  }
  
  return (
    <React.Fragment>
      {/* <div className="box">
        <div className="inner-box"> */}
          <p className="card-title">Star Racks 2 - Rath of Redux</p>
    <p className="card-body">Capitan, it's time for a journey of discovery and trade, again. This time we have a new Quantum AI Operation Control (Redux) that was integrated on the last ship refitting. SO, (queue scifi scroll) We are, again, taking our 24th Century Intergalactic Alcubierre Warp Vessel (spaceship) on an adventure around the galaxy. Trade our goods for Energy Credits (E) and seeing some more new places along the way, like the water based ships of a millennium ago. We will pick up some goods on Earth and make our way across the stars, selling and stocking goods from every planet. Unfortunately our Spatial Matter Calibrator (shrinkray) is still broken (you think that would have been the first thing they refitted ... but the Fleet is all about this new Redux thing ... ), so we only have room in the cargo hold for 32 Thermoplastic Liqui-Tite Modules (crates) of trade goods per slot. Diversification of our cargo is still the key to more Credits, so we only want to stock one item per slot at a time. The hold has 20 slots for all the trade goods. So what do you say say Captain...</p>
          <button className="" onClick={clickToCargo}>Engage</button>
        {/* </div>
      </div> */}
    </React.Fragment>
  );
}

export default Title;