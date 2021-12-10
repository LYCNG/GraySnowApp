import React from 'react'
import {Home,LoginPage,News,AccountPage} from "../page"
import { Route,Routes } from "react-router-dom";
import { HashRouter} from 'react-router-dom'

const BaseRouter = () => (
    
    <HashRouter>
        <Routes>
            <Route exact path ={'/'} element={<>{<Home />}</>} />
            <Route exact path={"/login"} element={<LoginPage />} />
            <Route exact path={"/account"} element={<AccountPage />} />
            <Route exact path={"/news"} element={<News />} />
        </Routes>
    </HashRouter>
);

export default BaseRouter;