import "./History.scss";

import React from "react";
import Container from "../../atoms/Container";
import Chrome from "../Chrome/Chrome";

const History = () => {
    const baseclass = "history";

    const { name, gender } = JSON.parse(
        localStorage.getItem("petRegistrationData")!,
    );

    const history = [
        { "20-05-05": "Lorem ipsum 5" },
        { "20-04-04": "Lorem ipsum 4" },
        { "20-03-03": "Lorem ipsum 3" },
        { "20-02-02": "Lorem ipsum 2" },
        { "20-01-01": "Lorem ipsum 1" },
    ];

    const petName = name ? name : "Pet";

    return (
        <Container className={baseclass}>
            <Chrome>
                <Container className={`${baseclass}__log`}>
                    <h2>{petName}'s History</h2>
                    <h3>March 2020</h3>
                    <Container className={`${baseclass}__log_entry`}>
                        <div
                            className={`${baseclass}__log_entry_header`}>
                            <h4>Tuesday 5th</h4>
                        </div>
                        <div
                            className={`${baseclass}__log_entry_body`}>
                            <p>
                                Today Marshall went to play in his
                                favourite park in Highgate, and (no
                                surprise) Squeaky came with.
                            </p>
                        </div>
                    </Container>
                </Container>
            </Chrome>
        </Container>
    );
};

export default History;
