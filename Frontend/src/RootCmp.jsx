import React from "react";
import { Switch, Route } from "react-router";
import routes from "./routes";

export class RootCmp extends React.Component {
  render() {
    return (
      <div>
     
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact
                component={route.component}
                path={route.path}
              />
            ))}
          </Switch>
       
      </div>
    );
  }
}
