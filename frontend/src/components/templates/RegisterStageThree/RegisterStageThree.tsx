import "./RegisterStageThree.scss";
import "./Spinner.scss";

import React, { useState } from "react";
import { useHistory } from "react-router";

import Container from "../../atoms/Container";
import { ReactComponent as BorderCollieIn } from "../../../icons/border_collie_in.svg";

const RegisterStageThree = () => {
    const baseclass = "register-stage-three";

    const history = useHistory();

    const { name: petName } = JSON.parse(
        localStorage.getItem("petRegistrationData")!,
    );

    const [etaForBuild, setEtaForBuild] = useState({
        minutes: 0,
        seconds: 3,
    });

    const { seconds } = etaForBuild;

    setInterval(() => {
        if (seconds > 1) {
            setEtaForBuild({
                ...etaForBuild,
                seconds: seconds - 1,
            });
        } else {
            etaForBuild.seconds = 3;
            history.push("/profile");
        }
    }, 1000);

    return (
        <Container className={baseclass}>
            <h2>Building {petName}'s profile</h2>
            <div className="loader">
                <BorderCollieIn className={`${baseclass}__logo`} />
            </div>
            <p>
                <h1>{seconds}</h1>
            </p>
        </Container>
    );
};

export default RegisterStageThree;
