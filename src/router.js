import React from 'react'
import { Route } from "react-router-dom";
import {Home,LoginPage} from "./components"

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={LoginPage } />
    </div>
);

export default BaseRouter;