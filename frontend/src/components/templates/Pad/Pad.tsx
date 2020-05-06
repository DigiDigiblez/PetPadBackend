import "./Pad.scss";

import React from "react";

import { ReactComponent as ExcitedMood } from "../../../icons/mood_1_excited.svg";
import { ReactComponent as HappyMood } from "../../../icons/mood_2_happy.svg";
import { ReactComponent as OkayMood } from "../../../icons/mood_3_okay.svg";
import { ReactComponent as SadMood } from "../../../icons/mood_4_sad.svg";
import { ReactComponent as AngryMood } from "../../../icons/mood_5_angry.svg";
import { ReactComponent as ExhaustedMood } from "../../../icons/mood_6_exhausted.svg";

import Container from "../../atoms/Container";
import Chrome from "../Chrome/Chrome";

const Pad = () => {
    const baseclass = "pad";

    const { name, gender } = JSON.parse(
        localStorage.getItem("petRegistrationData")!,
    );

    const selectMood = (e: any) => {
        console.log(e.currentTarget.getAttribute("name"));
    };

    const petName = name ? name : "Pet";

    let pronoun;
    if (gender === "male") pronoun = "he";
    else if (gender === "female") pronoun = "she";

    return (
        <Container className={baseclass}>
            <Chrome>
                <Container className={`${baseclass}__content`}>
                    <h2>{petName}'s Pad</h2>
                    <Container className={`${baseclass}__moods`}>
                        <h3>How was {petName} today?</h3>
                        <div className={`${baseclass}__moods_mood`}>
                            <ExcitedMood
                                onClick={selectMood}
                                name="Excited"
                            />
                            <span>Excited</span>
                        </div>
                        <div className={`${baseclass}__moods_mood`}>
                            <HappyMood
                                onClick={selectMood}
                                name="Happy"
                            />
                            <span>Happy</span>
                        </div>
                        <div className={`${baseclass}__moods_mood`}>
                            <OkayMood
                                onClick={selectMood}
                                name="Okay"
                            />
                            <span>Okay</span>
                        </div>
                        <div className={`${baseclass}__moods_mood`}>
                            <SadMood
                                onClick={selectMood}
                                name="Sad"
                            />
                            <span>Sad</span>
                        </div>
                        <div className={`${baseclass}__moods_mood`}>
                            <AngryMood
                                onClick={selectMood}
                                name="Angry"
                            />
                            <span>Angry</span>
                        </div>
                        <div className={`${baseclass}__moods_mood`}>
                            <ExhaustedMood
                                onClick={selectMood}
                                name="Exhausted"
                            />
                            <span>Exhausted</span>
                        </div>
                    </Container>

                    <Container className={`${baseclass}__note`}>
                        <h3>
                            What did {pronoun || "they"} do today?
                        </h3>
                        <textarea
                            name="log"
                            placeholder={`Tell ${name}'s story for today`}
                            id="log"
                        />
                    </Container>

                    <span
                        onClick={() => alert("Feature coming soon!")}>
                        <Container
                            className={`${baseclass}__attachments`}>
                            <span>Click to upload files</span>
                        </Container>
                    </span>

                    <button className="secondary_cta">
                        Publish post
                    </button>
                </Container>
            </Chrome>
        </Container>
    );
};

export default Pad;
