import "./Hero.scss";

import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import Container from "../../atoms/Container";
import { ROUTES } from "../../pages/Routes/types";

const Hero = () => {
    const baseclass = "hero";

    const { t } = useTranslation(["common"]);

    return (
        <Container className={baseclass}>
            <div className={`${baseclass}__background`} />
            <div className={`${baseclass}__text`} />
            <div className={`${baseclass}__content`}>
                <NavLink to={ROUTES.HOMEPAGE}>
                    <button className="primary_cta">
                        Register for free!
                    </button>
                </NavLink>
            </div>
        </Container>
    );
};

export default Hero;
