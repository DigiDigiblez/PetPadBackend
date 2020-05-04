import { addDecorator, configure } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import "../src/i18n";
import "../src/index.scss";

const req = require.context("../src/", true, /_stories\.[jt]sx?$/);

function loadStories() {
    req.keys().forEach(req);
}

addDecorator(withA11y);

configure(loadStories, module);
