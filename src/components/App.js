import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CargoControl from "./CargoControl";

function App() {
  return (
    <React.Fragment>
      <div className="contain">
        <div id="header">
          <Header />
        </div>
        <div id="pad">
          <div id="inner-pad-padding"></div>
          <div id="inner-pad">
            <CargoControl />
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

