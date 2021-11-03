import React from 'react'
import { Route,Switch } from "react-router-dom";
import {Home,LoginPage,CanvasControl} from "./components"

const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/login" component={LoginPage } />
            <Route exact path="/canvas" component={CanvasControl } />
        </Switch>
    </div>
);

export default BaseRouter;