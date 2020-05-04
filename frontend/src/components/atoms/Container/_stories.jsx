import { storiesOf } from "@storybook/react";
import React from "react";

import { LayoutDecorator } from "../../../../.storybook/decorators";
import Text from "../Text";
import Container from "./Container";

storiesOf("Atoms/Table", module)
    .addDecorator(LayoutDecorator)
    .add("with Text", () => (
        <Container>
            <Text>This is a container</Text>
        </Container>
    ));
