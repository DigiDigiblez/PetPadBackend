import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { LayoutDecorator } from "../../../../.storybook/decorators";
import Homepage from "../../pages/Homepage";
import { ROUTES } from "../../pages/Routes/types";
import PrivateRoute from "./PrivateRoute";

storiesOf("Molecules/PrivateRoute", module)
    .addDecorator(LayoutDecorator)
    .add("PrivateRoute", () => (
        <Router>
            <PrivateRoute
                exact
                path={ROUTES.HOMEPAGE}
                component={Homepage}
            />
        </Router>
    ));
