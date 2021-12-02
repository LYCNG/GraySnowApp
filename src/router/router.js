import React from 'react'
import { Route,Switch } from "react-router-dom";
import {Home,LoginPage,News} from "../components"
import useTracker from '../hooks/useTracker';

const BaseRouter = () => (
    <Switch>
        <Route exact path ={'/'} component={useTracker(Home) } />
        <Route exact path={"/login"} component={useTracker(LoginPage) } />
        <Route exact path={"/news"} component={useTracker(News) } />
    </Switch>

);

export default BaseRouter;