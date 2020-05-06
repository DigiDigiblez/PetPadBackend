import "./History.scss";

import React from "react";
import Container from "../../atoms/Container";
import Chrome from "../Chrome/Chrome";
import LogEntry from "../../organism/LogEntry";

const History = () => {
    const baseclass = "history";

    const history = [
        {
            entry: "Lorem ipsum 4",
            dateCreated: "2014-03-12T13:37:27+00:00",
            dateLastModified: "2014-03-12T13:37:27+00:00",
        },
        {
            entry: "Lorem ipsum 4",
            dateCreated: "2013-03-12T13:37:27+00:00",
            dateLastModified: "2013-03-12T13:37:27+00:00",
        },
        {
            entry: "Lorem ipsum 4",
            dateCreated: "2012-03-12T13:37:27+00:00",
            dateLastModified: "2012-03-12T13:37:27+00:00",
        },
        {
            entry: "Lorem ipsum 4",
            dateCreated: "2012-03-12T13:37:27+00:00",
            dateLastModified: "2012-03-12T13:37:27+00:00",
        },
        {
            entry: "Lorem ipsum 4",
            dateCreated: "2011-03-12T13:37:27+00:00",
            dateLastModified: "2011-03-12T13:37:27+00:00",
        },
        {
            entry: "Lorem ipsum 4",
            dateCreated: "2011-03-12T13:37:27+00:00",
            dateLastModified: "2011-03-12T13:37:27+00:00",
        },
        {
            entry: "Lorem ipsum 4",
            dateCreated: "2011-03-12T13:37:27+00:00",
            dateLastModified: "2011-03-12T13:37:27+00:00",
        },
    ];

    const { name: petName } = JSON.parse(
        localStorage.getItem("petRegistrationData")!,
    );

    return (
        <Container className={baseclass}>
            <Chrome>
                <Container className={`${baseclass}__content`}>
                    <h2>{petName}'s History</h2>
                    {history.map(entry => (
                        <LogEntry
                            dateCreated={entry.dateCreated}
                            dateLastModified={entry.dateLastModified}>
                            {entry.entry}
                        </LogEntry>
                    ))}
                </Container>
            </Chrome>
        </Container>
    );
};

export default History;
