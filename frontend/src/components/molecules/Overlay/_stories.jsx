import { storiesOf } from "@storybook/react";
import React from "react";

import { LayoutDecorator } from "../../../../.storybook/decorators";
import Text from "../../atoms/Text";
import Modal from "../Modal";
import Overlay from "./Overlay";

storiesOf("Atoms/ModalScreen", module)
    .addDecorator(LayoutDecorator)
    .add("General overlay", () => (
        <>
            <Modal>
                <Text tag="h4">Lorem lorem</Text>
                <Overlay />
            </Modal>
            <Text tag="h4">Lorem ipsum</Text>
            <Text tag="h4">Lorem ipsum</Text>
            <Text tag="h4">Lorem ipsum</Text>
            <Text tag="h4">Lorem ipsum</Text>
        </>
    ));
