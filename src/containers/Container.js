import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Main from "./Main";

export default ({ map, robot, city }) => {
  return (
    <Router>
      <Switch>
        <Route path="/main">
          <Main city={city} robot={robot} map={map} />
        </Route>
        <Route path="/">
          <Welcome city={city} robot={robot} map={map} />
        </Route>
      </Switch>
    </Router>
  );
};
