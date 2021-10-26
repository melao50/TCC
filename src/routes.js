import React from "react";
import { BrowserRouter,  Switch, Route } from 'react-router-dom'
import Initial from "./Pages/Inicial/routes2";

import PaginaInicial from "./Pages/Inicial/routes2";
import Main from "./Pages/Login/routes1";



function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/initial" component={Initial} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;