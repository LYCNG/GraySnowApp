import React,{Suspense} from 'react'
import { Route,Switch } from "react-router-dom";
// import {Home,LoginPage,News,AccountPage} from "../components"
import loadable from '@loadable/component'
import useTracker from '../hooks/useTracker';
// const {Home,LoginPage,News,AccountPage}= lazy(()=>import("../components/index"));
const Home = loadable(()=>import("../components/home"))
const LoginPage = loadable(()=>import("../components/login"))
const News = loadable(()=>import("../components/news"))
const AccountPage = loadable(()=>import("../components/user"))


const BaseRouter = () => (
    <Suspense callbacks={<div>Loading...</div>}>
        <Switch>
            <Route exact path ={'/'} component={useTracker(Home) } />
            <Route exact path={"/login"} component={useTracker(LoginPage) } />
            <Route exact path={"/account"} component={useTracker(AccountPage) } />
            <Route exact path={"/news"} component={useTracker(News) } />
        </Switch>
    </Suspense>
);

export default BaseRouter;