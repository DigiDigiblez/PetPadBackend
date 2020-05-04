import "./Register.scss";

import React from "react";

import Container from "../../atoms/Container";
import Chrome from "../../templates/Chrome/Chrome";
import RegisterStageOne from "../../templates/RegisterStageOne";
import RegisterStageThree from "../../templates/RegisterStageThree";
import RegisterStageTwo from "../../templates/RegisterStageTwo";

const Register = () => {
    const baseclass = "register";

    const currentStep = Number(localStorage.getItem("currentStep"));

    return (
        <Container className={baseclass}>
            <Chrome>
                {currentStep === 1 && <RegisterStageOne />}
                {currentStep === 2 && <RegisterStageTwo />}
                {currentStep === 3 && <RegisterStageThree />}
            </Chrome>
        </Container>
    );
};

export default Register;
