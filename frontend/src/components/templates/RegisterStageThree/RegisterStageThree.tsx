import "./RegisterStageThree.scss";
import "./Spinner.scss";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import Container from "../../atoms/Container";
import { ReactComponent as BorderCollieIn } from "../../../icons/border_collie_in.svg";

const RegisterStageThree = () => {
    const baseclass = "register-stage-three";

    const history = useHistory();

    const petData = JSON.parse(
        localStorage.getItem("petRegistrationData")!,
    );

    const [etaForBuild, setEtaForBuild] = useState({
        minutes: 0,
        seconds: 3,
    });

    // Persist local storage data to database on mount
    useEffect(() => {
        axios({
            method: "post",
            url: "http://localhost:5000/api/v1/pets",
            params: {
                name: "Jake",
                gender: "Male",
                species: "Dog",
                breed: "Border Collie",
                weight: 8.2,
                height: 37,
                birthday: "1997-07-16T19:20:30+01:00",
                favourite_toy: "Squeaky, the rubber duck",
                favourite_food: "Chewy Dentastix",
                personality_trait: "Playful",
                social_google_plus_url: "https://www.googleplus.com",
                social_facebook_url: "https://www.facebook.com",
                social_twitter_url: "https://www.twitter.com",
                social_instragram_url: "https://www.instagram.com",
            },
        })
            .then(result => {
                console.log("Success: ", result);
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    }, []);

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
            <h2>Building {petData.name}'s profile</h2>
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
