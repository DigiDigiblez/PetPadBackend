import { storiesOf } from "@storybook/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { LayoutDecorator } from "../../../../.storybook/decorators";
import Hero from "./Hero";

storiesOf("Molecules/Hero", module)
    .addDecorator(LayoutDecorator)
    .add("Hero", () => (
        <Router>
            <Hero />
        </Router>
    ));
