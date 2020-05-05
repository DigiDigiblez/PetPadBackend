import "./DrawerNavItem.scss";

import React, { useEffect, useState } from "react";
import { IDrawerNavItemProps } from "./types";
import { NavLink } from "react-router-dom";
import useStateWithCallback from "../../../helpers/hooks/useStateWithCallback";

const DrawerNavItem = ({
    to,
    alt,
    badge,
    text,
}: IDrawerNavItemProps) => {
    const baseclass = "drawer-nav-item";

    return (
        <NavLink to={to} className={baseclass}>
            {alt && badge && (
                <img
                    className={`${baseclass}_logo`}
                    alt={alt}
                    src={badge}
                    width="50px"
                    height="30px"
                />
            )}
            <span>{text}</span>
        </NavLink>
    );
};

export default DrawerNavItem;
