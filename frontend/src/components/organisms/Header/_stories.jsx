import { storiesOf } from "@storybook/react";
import React from "react";

import { LayoutDecorator } from "../../../../.storybook/decorators";
import Header from "./Header";

storiesOf("Organisms/Header", module)
    .addDecorator(LayoutDecorator)
    .add("Header", () => <Header />);
