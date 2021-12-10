import React from 'react'
import useTracker from '../hooks/useTracker';
import {Home,LoginPage,News,AccountPage} from "../page"
import { Route,Routes } from "react-router-dom";
import { HashRouter} from 'react-router-dom'


const BaseRouter = () => (
    <HashRouter>
        <Routes>
            <Route exact path ={'/'} element={useTracker(Home)} />
            <Route exact path={"/login"} element={useTracker(LoginPage) } />
            <Route exact path={"/account"} element={useTracker(AccountPage) } />
            <Route exact path={"/news"} element={useTracker(News) } />
        </Routes>
    </HashRouter>
);

export default BaseRouter;