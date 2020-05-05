import "./MainDrawerContent.scss";

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../atoms/Container";
import DrawerNavItem from "../../atoms/DrawerNavItem/DrawerNavItem";
import { ROUTES } from "../../pages/Routes/types";
import NavigateProfile from "../../../icons/navigate_profile.svg";
import NavigatePad from "../../../icons/navigate_pad.svg";
import NavigateHistory from "../../../icons/navigate_history.svg";
import NavigateAssistant from "../../../icons/navigate_assistant.svg";

const MainDrawerContent = () => {
    const baseclass = "main-drawer-content";
    const [auth, setAuth] = useState(false);
    const isAuthed = true;

    let { name } = JSON.parse(
        localStorage.getItem("petRegistrationData")!,
    );

    const petName = name ? name : "Pet";

    useEffect(() => {
        // TODO - Axios request post-auth BE setup to toggle based on authed user
        setAuth(localStorage.getItem("auth") === "true");
    }, []);

    return (
        <Container className={baseclass}>
            {isAuthed ? (
                <Container className={`${baseclass}__authed`}>
                    <div className={`${baseclass}__ctas`}>
                        <button className="primary_cta">
                            <NavLink to={ROUTES.HOMEPAGE}>
                                {petName}'s Dashboard
                            </NavLink>
                        </button>
                        <button className="link_cta">
                            <NavLink to={ROUTES.HOMEPAGE}>
                                Or sign out
                            </NavLink>
                        </button>
                    </div>
                    <div className={`${baseclass}__drawers`}>
                        <h2>Navigate</h2>
                        <DrawerNavItem
                            to="/profile"
                            badge={NavigateProfile}
                            alt={`Navigate to ${petName}'s profile`}
                            text={`${petName}'s profile`}
                        />
                        <DrawerNavItem
                            to="/pad"
                            badge={NavigatePad}
                            alt={`Navigate to ${petName}'s pad`}
                            text={`${petName}'s pad`}
                        />
                        <DrawerNavItem
                            to="/history"
                            badge={NavigateHistory}
                            alt={`Navigate to ${petName}'s history`}
                            text={`${petName}'s history`}
                        />
                        <DrawerNavItem
                            to="/assistant"
                            badge={NavigateAssistant}
                            alt={`Navigate to ${petName}'s assistant`}
                            text={`${petName}'s assistant`}
                        />
                    </div>
                </Container>
            ) : (
                <Container className={`${baseclass}__authed`}>
                    <div className={`${baseclass}__ctas`}>
                        <button className="primary_cta">
                            <NavLink to={ROUTES.HOMEPAGE}>
                                Register for free!
                            </NavLink>
                        </button>
                        <button className="primary_cta">
                            <NavLink to={ROUTES.HOMEPAGE}>
                                Or sign in
                            </NavLink>
                        </button>
                        <button
                            onClick={() =>
                                alert(
                                    "Auth not currently set up in the backend!",
                                )
                            }>
                            Toggle Auth
                        </button>
                    </div>
                </Container>
            )}
        </Container>
    );
};

export default MainDrawerContent;
