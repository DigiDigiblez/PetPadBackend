import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { LayoutDecorator } from "../../../../.storybook/decorators";
import Homepage from "../../pages/Homepage";
import { ROUTES } from "../../pages/Routes/types";
import PublicRoute from "./PublicRoute";

storiesOf("Molecules/PublicRoute", module)
    .addDecorator(LayoutDecorator)
    .add("PublicRoute", () => (
        <Router>
            <PublicRoute
                exact
                path={ROUTES.HOMEPAGE}
                component={Homepage}
            />
        </Router>
    ));
