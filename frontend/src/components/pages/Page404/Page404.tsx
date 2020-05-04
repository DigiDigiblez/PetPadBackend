import "./Page404.scss";

import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../../icons/logo.svg";
import Container from "../../atoms/Container";
import Chrome from "../../templates/Chrome/Chrome";
import { ROUTES } from "../Routes/types";

const Page404 = () => {
    const baseclass = "page404";

    return (
        <Container className={baseclass}>
            <Chrome>
                <section className={`${baseclass}__main`}>
                    <span>404</span>
                    <span>
                        Looks like we&apos;re lost.
                        <br /> Let&apos;s teleport back home.
                    </span>

                    <Logo className={`${baseclass}_logo`} />
                    <button>
                        <NavLink to={ROUTES.HOMEPAGE}>
                            GO HOME
                        </NavLink>
                    </button>
                </section>
            </Chrome>
        </Container>
    );
};

export default Page404;
