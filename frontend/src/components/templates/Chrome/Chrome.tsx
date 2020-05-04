import "./Chrome.scss";

import React from "react";

import Container from "../../atoms/Container";
import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";
import { IChromeProps } from "./types";

const Chrome = ({ children }: IChromeProps) => {
    const baseclass = "chrome";

    return (
        <Container className={baseclass}>
            <Header />
            {children}
            <Footer />
        </Container>
    );
};

export default Chrome;
