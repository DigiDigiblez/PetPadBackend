import React from "react";

import Container from "../../atoms/Container";
import { useHistory } from "react-router";

const RegisterStageTwo = () => {
    const baseclass = "register-stage-two";

    const history = useHistory();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { species, breed, weight, height } = e.target;

        let petData = JSON.parse(
            localStorage.getItem("petRegistrationData")!,
        );

        petData = {
            ...petData,
            species: species.value,
            breed: breed.value,
            weight: weight.value,
            height: height.value,
        };

        localStorage.setItem(
            "petRegistrationData",
            JSON.stringify(petData),
        );

        localStorage.setItem("currentStep", "3");
        history.push("/register");
    };

    const { name: petName } = JSON.parse(
        localStorage.getItem("petRegistrationData")!,
    );

    return (
        <Container className={baseclass}>
            <h2>All about {petName}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    {" "}
                    <label htmlFor="species">
                        Who is{" "}
                        <span className="emphasis">{petName}</span>?
                    </label>
                    <select name="species" id="form-species">
                        <option disabled selected>
                            {petName} is a
                        </option>
                        <option value="Dog">Dog</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="breed">
                        What is {petName}'s{" "}
                        <span className="emphasis">breed</span>?
                    </label>
                    <select name="breed" id="form-breed">
                        <option disabled selected>
                            {petName}'s breed is a
                        </option>
                        <option value="Border Collie">
                            Border Collie
                        </option>
                    </select>
                </div>

                <div>
                    <label htmlFor="weight">
                        What is {petName}'s{" "}
                        <span className="emphasis">weight</span>?
                    </label>
                    <input
                        name="weight"
                        type="text"
                        placeholder={`${petName}'s weight is`}
                        id="form-weight"
                    />
                </div>

                <div>
                    <label htmlFor="height">
                        What is {petName}'s{" "}
                        <span className="emphasis">height</span>?
                    </label>
                    <input
                        name="height"
                        type="text"
                        placeholder={`${petName}'s height is`}
                        id="form-height"
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

export default RegisterStageTwo;
