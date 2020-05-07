import React from "react";

import Container from "../../atoms/Container";
import Hero from "../../molecules/Hero";
import Chrome from "../../templates/Chrome/Chrome";

const Homepage = () => {
    const baseclass = "homepage";

    return (
        <Container className={baseclass}>
            <Chrome>
                <Hero />
            </Chrome>
        </Container>
    );
};

export default Homepage;
