import { storiesOf } from "@storybook/react";
import React from "react";

import { LayoutDecorator } from "../../../../.storybook/decorators";
import Footer from "./Footer";

storiesOf("Organisms/Footer", module)
    .addDecorator(LayoutDecorator)
    .add("Footer", () => <Footer />);
