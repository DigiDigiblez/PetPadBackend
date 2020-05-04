import { storiesOf } from "@storybook/react";
import React from "react";

import { LayoutDecorator } from "../../../../.storybook/decorators";
import Drawer from "./Drawer";

storiesOf("Organisms/Header", module)
    .addDecorator(LayoutDecorator)
    .add("Header", () => <Drawer />);
