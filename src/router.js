import React from 'react'
import { Route,Switch } from "react-router-dom";
import {Home,LoginPage} from "./components"


const {REACT_APP_GITHUB_PAGE_URL} = process.env;
const url = REACT_APP_GITHUB_PAGE_URL
const BaseRouter = () => (
    
    <div>
        <Switch>
            <Route exact path ={`/${url}`} component={ Home } />
            <Route exact path={`/${url}/login`} component={ LoginPage } />
        </Switch>
    </div>
);

export default BaseRouter;