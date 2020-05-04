import "./Drawer.scss";

import React, { ReactNode } from "react";

import Container from "../../atoms/Container";

interface IDrawerProps {
    children: ReactNode;
}

const Drawer = ({ children }: IDrawerProps) => {
    const baseclass = "drawer";

    return <Container className={baseclass}>{children}</Container>;
};

export default Drawer;
