import "./Profile.scss";

import React, { useEffect, useState } from "react";

import * as PlaceholderProfileImage from "../../../res/profile_image.png";

import Container from "../../atoms/Container";
import Chrome from "../Chrome/Chrome";
import persistToLocalStorage from "../../../helpers/utilities/persistToLocalStorage";

const Profile = () => {
    const baseclass = "profile";

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const {
            name,
            species,
            breed,
            favouriteToy,
            favouriteFood,
            personalityTrait,
            weight,
            height,
        } = e.target;

        let petData = JSON.parse(
            localStorage.getItem("petRegistrationData")!,
        );

        const completedPetData = {
            name: name ? name.value : petData.name,
            species: species ? species.value : petData.species,
            breed: breed ? breed.value : petData.breed,
            favouriteToy: favouriteToy
                ? favouriteToy.value
                : petData.favouriteToy,
            favouriteFood: favouriteFood
                ? favouriteFood.value
                : petData.favouriteFood,
            personalityTrait: personalityTrait
                ? personalityTrait.value
                : petData.personalityTrait,
            weight: weight ? weight.value : petData.weight,
            height: height ? height.value : petData.height,
        };

        // Check if the profile is complete
        const isComplete: boolean = Object.values(
            completedPetData,
        ).every(property => property);

        petData = {
            ...petData,
            completedProfile: isComplete,
            ...completedPetData,
        };
        // Trigger refresh
        setHasCompletedProfile(isComplete);
        setPetsName(name);

        const well = document.querySelector(".save-successful-well")!;
        const submitBtn = document.getElementById(
            "save-profile-data-btn",
        )! as HTMLInputElement;

        well.classList.toggle("hidden");
        submitBtn.disabled = true;
        submitBtn.style.cursor = "not-allowed";

        setTimeout(() => {
            well.classList.toggle("hidden");
            submitBtn.disabled = false;
            submitBtn.style.cursor = "pointer";
        }, 2000);

        localStorage.setItem(
            "petRegistrationData",
            JSON.stringify(petData),
        );
    };

    const {
        name,
        gender,
        species,
        breed,
        // birthday,
        favouriteToy,
        favouriteFood,
        personalityTrait,
        weight,
        height,
        completedProfile,
        profileImage,
    } = JSON.parse(localStorage.getItem("petRegistrationData")!);

    let pronoun;
    if (gender === "male") pronoun = "his";
    else if (gender === "female") pronoun = "her";

    const petName = name ? name : "Pet";

    const [, setHasCompletedProfile] = useState(completedProfile);
    const [, setPetsName] = useState(completedProfile);

    // Click the file uploader input when the profile image container is clicked
    const handleFileUploader = () => {
        document.getElementById("upload-image")!.click();
    };

    // Capture new upload profile images
    const [petProfileImage, setPetProfileImage] = useState(
        profileImage || PlaceholderProfileImage,
    );

    // Set new uploaded images to local storage, base64 encoded, trigger refresh.
    useEffect(() => {
        persistToLocalStorage(
            "petRegistrationData",
            "profileImage",
            petProfileImage,
        );
    }, [petProfileImage]);

    const encodeImageFileAsURL = (files: any): void => {
        if (files && files[0]) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPetProfileImage(reader.result);
            };
            reader.readAsDataURL(files[0]);
        }
    };

    return (
        <Container className={baseclass}>
            <Chrome>
                <Container className={`${baseclass}__content`}>
                    <h2>{petName}'s Profile</h2>
                    <Container className={`${baseclass}__pet_avatar`}>
                        <img
                            onClick={handleFileUploader}
                            src={
                                (petProfileImage as unknown) as string
                            }
                            alt={`${petName}`}
                            id="profile-image"
                        />
                        {petProfileImage ===
                            PlaceholderProfileImage && (
                            <span className="change-image">
                                Upload image
                            </span>
                        )}
                    </Container>
                    {/* Gets invokes when the profile image is clicked */}
                    <input
                        type="file"
                        onChange={e =>
                            encodeImageFileAsURL(e.target.files)
                        }
                        id="upload-image"
                        multiple={false}
                        capture
                    />

                    <Container className={`${baseclass}__pet_data`}>
                        <span
                            className={`${baseclass}__pet_data_title`}>
                            {completedProfile ? (
                                <h4>
                                    {petName
                                        ? `${petName}'s`
                                        : pronoun}{" "}
                                    profile complete
                                </h4>
                            ) : (
                                <h4>
                                    Complete{" "}
                                    {petName
                                        ? `${petName}'s`
                                        : pronoun}{" "}
                                    profile
                                </h4>
                            )}
                        </span>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="name"
                                type="text"
                                placeholder={`${petName}'s name`}
                                defaultValue={petName}
                                id="form-name"
                            />

                            <input
                                name="species"
                                type="text"
                                placeholder={`${petName}'s species`}
                                defaultValue={species}
                                id="form-species"
                            />

                            <input
                                name="breed"
                                type="text"
                                placeholder={`${petName}'s breed`}
                                defaultValue={breed}
                                id="form-breed"
                            />

                            <input
                                name="favouriteToy"
                                type="text"
                                placeholder={`${petName}'s favourite toy`}
                                defaultValue={favouriteToy}
                                id="form-favourite-toy"
                            />

                            <input
                                name="favouriteFood"
                                type="text"
                                placeholder={`${petName}'s favourite food`}
                                defaultValue={favouriteFood}
                                id="form-favourite-food"
                            />

                            <input
                                name="personalityTrait"
                                type="text"
                                placeholder={`${petName}'s personality trait`}
                                defaultValue={personalityTrait}
                                id="form-personality-trait"
                            />

                            <input
                                name="weight"
                                type="text"
                                placeholder={`${petName}'s weight (in kg)`}
                                defaultValue={weight}
                                id="form-weight"
                            />

                            <input
                                name="height"
                                type="text"
                                placeholder={`${petName}'s height (in cm)`}
                                defaultValue={height}
                                id="form-height"
                            />

                            <button
                                type="submit"
                                className="secondary_cta"
                                id="save-profile-data-btn">
                                Continue
                            </button>

                            <div
                                className={`well save-successful-well hidden`}>
                                Profile saved!
                            </div>
                        </form>
                    </Container>

                    {/*<Container className={`${baseclass}__pet_social`}>*/}
                    {/*    <span*/}
                    {/*        className={`${baseclass}__pet_data_title`}>*/}
                    {/*        <h4>*/}
                    {/*            Link {pronoun ? pronoun : `${name}'s`}{" "}*/}
                    {/*            social media*/}
                    {/*        </h4>*/}
                    {/*    </span>*/}
                    {/*    Buttons TBA...*/}
                    {/*</Container>*/}
                </Container>
            </Chrome>
        </Container>
    );
};

export default Profile;
