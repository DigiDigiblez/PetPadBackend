import React from "react";
import { Redirect } from "react-router";
import { Switch } from "react-router-dom";

import PublicRoute from "../../molecules/PublicRoute/PublicRoute";
import Pad from "../../templates/Pad";
import History from "../../templates/History";
import Profile from "../../templates/Profile";
import Homepage from "../Homepage";
import Page404 from "../Page404";
import Register from "../Register";
import { ROUTES } from "./types";
import Assistant from "../../templates/Assistant/Assistant";

const Routes = () => (
    <Switch>
        <PublicRoute
            exact
            path={ROUTES.HOMEPAGE}
            component={Homepage}
        />
        <PublicRoute
            exact
            path={ROUTES.REGISTER}
            component={Register}
        />
        <PublicRoute
            exact
            path={ROUTES.PROFILE}
            component={Profile}
        />
        <PublicRoute exact path={ROUTES.PAD} component={Pad} />
        <PublicRoute
            exact
            path={ROUTES.HISTORY}
            component={History}
        />
        <PublicRoute
            exact
            path={ROUTES.ASSISTANT}
            component={Assistant}
        />
        <PublicRoute exact path="/404" component={Page404} />
        <Redirect to="/404" />
    </Switch>
);

export default Routes;
