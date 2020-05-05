import "./Header.scss";

import React, { useState } from "react";

import { ReactComponent as Hamburger } from "../../../icons/hamburger.svg";
import { ReactComponent as Logo } from "../../../icons/logo.svg";
import Overlay from "../../molecules/Overlay";
import MainDrawerContent from "../../templates/MainDrawerContent/MainDrawerContent";
import Drawer from "../Drawer/Drawer";
import Container from "../../atoms/Container";

const baseclass = "header";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { name, gender } = JSON.parse(
        localStorage.getItem("petRegistrationData")!,
    );

    return (
        <header className={baseclass}>
            <Container className={`${baseclass}__logo`}>
                <Logo className={`${baseclass}__logo_image`} />
                <h2 className={`${baseclass}__logo_name`}>
                    {name ? name : "Pet Pad"}
                </h2>
            </Container>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <span onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Hamburger className={`${baseclass}__hamburger`} />
            </span>
            {isMenuOpen && (
                <>
                    <Drawer>
                        <MainDrawerContent />
                    </Drawer>
                    <Overlay version="drawer" />
                </>
            )}
        </header>
    );
};

export default Header;
