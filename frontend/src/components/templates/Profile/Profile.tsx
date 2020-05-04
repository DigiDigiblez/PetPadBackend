import "./Profile.scss";

import React from "react";

import * as ProfileImage from "../../../res/profile_image.png";

import Container from "../../atoms/Container";

const Profile = () => {
    const baseclass = "profile";

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
    };

    const {
        gender,
        name,
        species,
        breed,
        // birthday,
        favouriteToy,
        favouriteFood,
        personalityTrait,
        weight,
        height,
        // socialGoogle,
        // socialFacebook,
        // socialTwitter,
        // socialInstagram,
    } = JSON.parse(localStorage.getItem("petRegistrationData")!);

    let pronoun;
    if (gender === "male") pronoun = "his";
    else if (gender === "female") pronoun = "her";

    return (
        <Container className={baseclass}>
            <h2>{name}'s Profile</h2>
            <Container className={`${baseclass}__pet_avatar`}>
                <img
                    src={(ProfileImage as unknown) as string}
                    alt={`${name}`}
                />
            </Container>

            <Container className={`${baseclass}__pet_data`}>
                <span className={`${baseclass}__pet_data_title`}>
                    <h4>
                        Complete {pronoun ? pronoun : `${name}'s`}{" "}
                        profile
                    </h4>
                </span>
                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        placeholder={name}
                        value={name}
                        id="form-name"
                    />

                    <input
                        name="species"
                        type="text"
                        placeholder={species}
                        value={species}
                        id="form-species"
                    />

                    <input
                        name="breed"
                        type="text"
                        placeholder={breed}
                        value={breed}
                        id="form-breed"
                    />

                    <input
                        name="favouriteToy"
                        type="text"
                        placeholder={favouriteToy}
                        value={favouriteToy}
                        id="form-favouriteToy"
                    />

                    <input
                        name="favouriteFood"
                        type="text"
                        placeholder={favouriteFood}
                        value={favouriteFood}
                        id="form-favouriteFood"
                    />

                    <input
                        name="personalityTrait"
                        type="text"
                        placeholder={personalityTrait}
                        value={personalityTrait}
                        id="form-personalityTrait"
                    />

                    <input
                        name="weight"
                        type="text"
                        placeholder={weight}
                        value={weight}
                        id="form-weight"
                    />

                    <input
                        name="height"
                        type="text"
                        placeholder={height}
                        value={height}
                        id="form-height"
                    />

                    <input
                        name="height"
                        type="text"
                        placeholder={name}
                        value={name}
                        id="form-height"
                    />

                    <input
                        name="height"
                        type="text"
                        placeholder={name}
                        value={name}
                        id="form-height"
                    />

                    {/*<div>*/}
                    {/*    <label htmlFor="breed">*/}
                    {/*        What is {petName}'s{" "}*/}
                    {/*        <span className="emphasis">breed</span>?*/}
                    {/*    </label>*/}
                    {/*    <select name="breed" id="form-breed">*/}
                    {/*        <option disabled selected>*/}
                    {/*            {petName}'s breed is a*/}
                    {/*        </option>*/}
                    {/*        <option value="Border Collie">*/}
                    {/*            Border Collie*/}
                    {/*        </option>*/}
                    {/*        <option value="German Shepherd">*/}
                    {/*            German Shepherd*/}
                    {/*        </option>*/}
                    {/*    </select>*/}
                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    <label htmlFor="weight">*/}
                    {/*        What is {petName}'s{" "}*/}
                    {/*        <span className="emphasis">weight</span>?*/}
                    {/*    </label>*/}
                    {/*    <input*/}
                    {/*        name="weight"*/}
                    {/*        type="text"*/}
                    {/*        placeholder={`${petName}'s weight is`}*/}
                    {/*        id="form-weight"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    <label htmlFor="height">*/}
                    {/*        What is {petName}'s{" "}*/}
                    {/*        <span className="emphasis">height</span>?*/}
                    {/*    </label>*/}
                    {/*    <input*/}
                    {/*        name="height"*/}
                    {/*        type="text"*/}
                    {/*        placeholder={`${petName}'s height is`}*/}
                    {/*        id="form-height"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <button
                        type="submit"
                        className="secondary_cta"
                        id="form-button">
                        Continue
                    </button>
                </form>
            </Container>

            <Container className={`${baseclass}__pet_social`}>
                <span className={`${baseclass}__pet_data_title`}>
                    <h4>
                        Link {pronoun ? pronoun : `${name}'s`} social
                        media
                    </h4>
                </span>
                Buttons TBA...
            </Container>
        </Container>
    );
};

export default Profile;
