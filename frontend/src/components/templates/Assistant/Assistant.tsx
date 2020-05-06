import "./Assistant.scss";

import React from "react";
import * as AssistantFigure from "../../../icons/assistant.png";

import Container from "../../atoms/Container";
import Chrome from "../Chrome/Chrome";

const Assistant = () => {
    const baseclass = "assistant";

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
                    <h2>{petName}'s Assistant</h2>
                    <h3>Generate report from dates</h3>
                    <div className={`${baseclass}__dates`}>
                        <span>Report start date</span>
                        <input
                            type="date"
                            onClick={() =>
                                alert("Feature coming soon")
                            }
                        />
                        <span>Report end date</span>
                        <input
                            type="date"
                            onClick={() =>
                                alert("Feature coming soon")
                            }
                        />
                    </div>
                    <img
                        src={(AssistantFigure as unknown) as string}
                    />
                    <Container className={`${baseclass}__advice`}>
                        <div className={`${baseclass}__advice_intro`}>
                            Good morning{" "}
                            <span className="emphasis">
                                Mr. Bowen
                            </span>
                            , thanks for keeping me up to speed with
                            Marshall’s well being. My feedback for{" "}
                            <span className="emphasis">today</span> is
                            as follows:
                        </div>
                        <div className={`${baseclass}__advice_tip`}>
                            <span className="emphasis">
                                General mood
                            </span>
                            : Happy ✅ <br /> I am pleased to say that
                            72% of the time Marshall is happy.
                        </div>
                        <div className={`${baseclass}__advice_tip`}>
                            <span className="emphasis">
                                Current weight
                            </span>
                            : Under ❌ <br /> Unfortunately, Marshall
                            is currently underweight for his age at
                            13.1 kg. Border Collies aged 4yr 11mo
                            should weight between 14-20 kg.
                        </div>
                        <div className={`${baseclass}__advice_tip`}>
                            <span className="emphasis">
                                Personality trait
                            </span>
                            : Playful ✅ <br /> This is a great trait
                            to have. He really benefits from the
                            constant enjoyment, which helps to keep
                            his stress levels to a minimum. Just be
                            wary of letting him off the leash near
                            roads, and leash him before he gets to the
                            park gates.
                        </div>
                    </Container>

                    <button className="secondary_cta">
                        Publish post
                    </button>
                </Container>
            </Chrome>
        </Container>
    );
};

export default Assistant;
