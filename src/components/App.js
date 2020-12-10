import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CargoControl from "./CargoControl";
import Title from './Title';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
            <Router>
              <Switch>
                <Route path='/CargoControl'>
                  <CargoControl />
                </Route>
                <Route path='/'>
                  <Title />
                </Route>
              </Switch>
            </Router>
            
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

