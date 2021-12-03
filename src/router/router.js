import React,{ Suspense,lazy} from 'react'
import { Route,Switch } from "react-router-dom";
// import {Home,LoginPage,News,AccountPage} from "../components"
import useTracker from '../hooks/useTracker';
// const {Home,LoginPage,News,AccountPage}= lazy(()=>import("../components/index"));
const Home = lazy(()=>import("../components/home"))
const LoginPage = lazy(()=>import("../components/login"))
const News = lazy(()=>import("../components/news"))
const AccountPage = lazy(()=>import("../components/user"))


const BaseRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path ={'/'} component={useTracker(Home) } />
            <Route exact path={"/login"} component={useTracker(LoginPage) } />
            <Route exact path={"/account"} component={useTracker(AccountPage) } />
            <Route exact path={"/news"} component={useTracker(News) } />
        </Switch>
    </Suspense>

);

export default BaseRouter;