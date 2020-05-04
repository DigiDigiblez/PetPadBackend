import "./Overlay.scss";

import cls from "classnames";
import React from "react";

import { IOverlayProps } from "./types";

const Overlay = ({ version }: IOverlayProps) => {
    const baseclass = "overlay";

    const classes = cls(baseclass, `${baseclass}--${version}`);

    return <section className={classes} />;
};

export default Overlay;
