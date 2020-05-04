import React from "react";
import { Provider } from "react-redux";
import configureAppStore from "../src/redux/store";

const paddingStyles = {
    padding: "16px",
};

export const LayoutDecorator = storyFn => (
    <div style={paddingStyles}>{storyFn()}</div>
);

export const StoreDecorator = state => storyFn => {
    const store = configureAppStore(state);
    return <Provider store={store}>{storyFn()}</Provider>;
};
