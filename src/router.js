import React from 'react'
import { Route,Switch } from "react-router-dom";
import {Home,LoginPage} from "./components"


const {REACT_APP_PUBLIC_URL} = process.env;
const url = REACT_APP_PUBLIC_URL

const BaseRouter = () => (
    <Switch>
        <Route exact path ={'/'} component={ Home } />
        <Route exact path={"react-temp/login"} component={ LoginPage } />
    </Switch>

);

export default BaseRouter;