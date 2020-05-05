import "./App.scss";

import React from "react";
import { BrowserRouter } from "react-router-dom";

import Container from "./components/atoms/Container";
import Routes from "./components/pages/Routes";

if (!localStorage.getItem("currentStep")) {
    localStorage.setItem("currentStep", "1");
}

if (!localStorage.getItem("petRegistrationData")) {
    localStorage.setItem(
        "petRegistrationData",
        JSON.stringify({
            profileImage: null,
            gender: "",
            name: "",
            species: "",
            breed: "",
            birthday: "",
            favouriteToy: "",
            favouriteFood: "",
            personalityTrait: "",
            weight: 0,
            height: 0,
            socialGoogle: "",
            socialFacebook: "",
            socialTwitter: "",
            socialInstagram: "",
        }),
    );
}

const App = () => {
    const baseclass = "app";

    return (
        <Container className={baseclass}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Container>
    );
};

export default App;
