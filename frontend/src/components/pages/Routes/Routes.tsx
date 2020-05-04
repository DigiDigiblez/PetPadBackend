import React from "react";
import { Redirect } from "react-router";
import { Switch } from "react-router-dom";

import PublicRoute from "../../molecules/PublicRoute/PublicRoute";
import Homepage from "../Homepage";
import Page404 from "../Page404";
import { ROUTES } from "./types";

const Routes = () => (
    <Switch>
        <PublicRoute
            exact
            path={ROUTES.HOMEPAGE}
            component={Homepage}
        />
        {/*  TEST ROUTES END  */}
        <PublicRoute exact path="/404" component={Page404} />
        <Redirect to="/404" />
    </Switch>
);

export default Routes;
