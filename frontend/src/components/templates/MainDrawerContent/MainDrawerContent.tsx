import "./MainDrawerContent.scss";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../atoms/Container";
import DrawerNavItem from "../../atoms/DrawerNavItem/DrawerNavItem";
import { ROUTES } from "../../pages/Routes/types";

const MainDrawerContent = () => {
    const baseclass = "main-drawer-content";
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        // TODO - Axios request post-auth BE setup to toggle based on authed user
        setAuth(localStorage.getItem("auth") === "true");
    });

    return (
        <Container className={baseclass}>
            <div className={`${baseclass}__ctas`}>
                <button>
                    <NavLink to={ROUTES.HOMEPAGE}>
                        Register for free!
                    </NavLink>
                </button>
                <button>
                    <NavLink to={ROUTES.HOMEPAGE}>Or sign in</NavLink>
                </button>
                <button
                    onClick={() =>
                        alert(
                            "Auth not currently set up in the backend!",
                        )
                    }>
                    Toggle Auth
                </button>
                {auth && (
                    <button>
                        <NavLink to={ROUTES.HOMEPAGE}>
                            ENTER DEV ACCOUNT
                        </NavLink>
                    </button>
                )}
            </div>
            <div className={`${baseclass}__drawers`}>
                <span>Navigate</span>
                {/* TODO -  add in pet's name dynamically */}
                <DrawerNavItem
                    alt="Navigate to Marshall's profile"
                    text="Marshall's profile"
                />
                <DrawerNavItem
                    alt="Navigate to Marshall's pad"
                    text="Marshall's pad"
                />
                <DrawerNavItem
                    alt="Navigate to Marshall's history"
                    text="Marshall's history"
                />
                />
                <DrawerNavItem
                    alt="Navigate to Marshall's assistant"
                    text="Marshall's assistant"
                />
            </div>
        </Container>
    );
};

export default MainDrawerContent;
