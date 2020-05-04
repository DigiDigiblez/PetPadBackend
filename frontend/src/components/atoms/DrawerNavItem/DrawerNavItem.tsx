import "./DrawerNavItem.scss";

import React from "react";

import Container from "../Container";
import { IDrawerNavItemProps } from "./types";
import { ReactComponent as NavigateProfile } from "../../../icons/navigate_profile.svg";

const DrawerNavItem = ({ alt, badge, text }: IDrawerNavItemProps) => {
    const baseclass = "drawer-nav-item";

    return (
        <Container className={baseclass}>
            {alt && badge && (
                <NavigateProfile className={`${baseclass}_logo`} />
            )}
            <span>{text}</span>
        </Container>
    );
};

export default DrawerNavItem;
