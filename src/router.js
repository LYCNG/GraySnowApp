import React from 'react'
import { Route,Switch } from "react-router-dom";
import {Home,LoginPage} from "./components"
import useTracker from './hooks/useTracker';

const {REACT_APP_PUBLIC_URL} = process.env;
const url = REACT_APP_PUBLIC_URL

const BaseRouter = () => (
    <Switch>
        <Route exact path ={'/'} component={useTracker(Home) } />
        <Route exact path={"/login"} component={useTracker(LoginPage) } />
    </Switch>

);

export default BaseRouter;