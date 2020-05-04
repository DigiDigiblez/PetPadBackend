import "./Header.scss";

import React from "react";

import useLocalStorage from "../../../helpers/hooks/useLocalStorage";
import { ReactComponent as Hamburger } from "../../../icons/hamburger.svg";
import { ReactComponent as LogoFull } from "../../../icons/logo_full.svg";
import Overlay from "../../molecules/Overlay";
import MainDrawerContent from "../../templates/MainDrawerContent/MainDrawerContent";
import Drawer from "../Drawer/Drawer";

const baseclass = "header";

const Header = () => {
    const [showMenu, setShowMenu] = useLocalStorage("menu", "false");

    return (
        <header className={baseclass}>
            <LogoFull className={`${baseclass}_logo`} />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <span onClick={() => setShowMenu(!showMenu)}>
                <Hamburger className={`${baseclass}_hamburger`} />
            </span>
            {showMenu && (
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
