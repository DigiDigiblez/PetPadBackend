import "./Container.scss";

import React from "react";

import { IContainerProps } from "./types";

const Container = ({ children, className }: IContainerProps) => {
    return <div className={className}>{children}</div>;
};

export default Container;
