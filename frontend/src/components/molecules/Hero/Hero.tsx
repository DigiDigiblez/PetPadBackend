import "./Hero.scss";

import React from "react";
import { NavLink } from "react-router-dom";

import Container from "../../atoms/Container";
import { ROUTES } from "../../pages/Routes/types";

const Hero = () => {
    const baseclass = "hero";

    return (
        <Container className={baseclass}>
            <div className={`${baseclass}__background`} />
            <div className={`${baseclass}__text`} />
            <div className={`${baseclass}__content`}>
                <NavLink to={ROUTES.REGISTER}>
                    <button className="primary_cta">
                        Register for free!
                    </button>
                </NavLink>
            </div>
        </Container>
    );
};

export default Hero;
