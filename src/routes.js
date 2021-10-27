import React from "react";
import { BrowserRouter,  Switch, Route } from 'react-router-dom'
import Initial from "./Pages/Inicial/routes2";

import Login from "./Pages/Login/routes1";



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Login} />
                <Route path="/initial" component={Initial} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;