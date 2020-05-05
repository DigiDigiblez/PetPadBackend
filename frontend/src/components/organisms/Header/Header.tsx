import "./Header.scss";

import React, { useState } from "react";

import { ReactComponent as Hamburger } from "../../../icons/hamburger.svg";
import { ReactComponent as LogoFull } from "../../../icons/logo_full.svg";
import Overlay from "../../molecules/Overlay";
import MainDrawerContent from "../../templates/MainDrawerContent/MainDrawerContent";
import Drawer from "../Drawer/Drawer";

const baseclass = "header";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={baseclass}>
            <LogoFull className={`${baseclass}_logo`} />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <span onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Hamburger className={`${baseclass}_hamburger`} />
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
