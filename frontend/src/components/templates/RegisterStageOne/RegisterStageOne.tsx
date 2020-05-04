import React from "react";

import Container from "../../atoms/Container";
import { useHistory } from "react-router";

const RegisterStageOne = () => {
    const baseclass = "register-stage-one";

    const history = useHistory();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { gender, name } = e.target;

        let petData = JSON.parse(
            localStorage.getItem("petRegistrationData")!,
        );

        petData = {
            ...petData,
            gender: gender.value,
            name: name.value,
        };

        localStorage.setItem(
            "petRegistrationData",
            JSON.stringify(petData),
        );

        localStorage.setItem("currentStep", "2");
        history.push("/register");
    };

    return (
        <Container className={baseclass}>
            <h2>Introductions</h2>
            <p>
                Welcome, fellow pet lover! Exciting to set up a new
                pad for your wonderful pet! To begin, we need some
                information to build their profile...
            </p>
            <form onSubmit={handleSubmit}>
                <div>
                    {" "}
                    <label htmlFor="gender">
                        What is their{" "}
                        <span className="emphasis">gender</span>?
                    </label>
                    <select name="gender" id="form-gender">
                        <option disabled selected>
                            My pet is a
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="name">
                        What is their{" "}
                        <span className="emphasis">name</span>?
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="My pet is called"
                        id="form-name"
                    />
                </div>

                <button
                    type="submit"
                    className="secondary_cta"
                    id="form-button">
                    Continue
                </button>
            </form>
        </Container>
    );
};

export default RegisterStageOne;
