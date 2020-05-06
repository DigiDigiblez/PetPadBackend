import "./LogEntry.scss";

import React from "react";
import Container from "../../atoms/Container";

import { ReactComponent as HistoryAttachment } from "../../../icons/history_attachment.svg";
import { ReactComponent as HistoryEdit } from "../../../icons/history_edit.svg";
import { ReactComponent as HistoryDelete } from "../../../icons/history_delete.svg";
import { ReactComponent as Birthday } from "../../../icons/birthday.svg";
import { ILogEntryProps } from "./types";

const LogEntry = ({
    dateCreated,
    dateLastModified,
    children,
}: ILogEntryProps) => {
    const baseclass = "log-entry";

    const date = new Date(dateLastModified);

    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.toLocaleString("en-US", { year: "numeric" });
    const weekday = date.toLocaleString("en-US", {
        weekday: "short",
    });
    const day = date.toLocaleString("en-US", { day: "numeric" });
    const time = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
    });

    return (
        <Container className={`${baseclass}__log`}>
            <h3>
                {weekday} {day} {month}, {year}
            </h3>
            <Container className={`${baseclass}__log_entry`}>
                <div className={`${baseclass}__log_entry_header`}>
                    <div
                        className={`${baseclass}__log_entry_header_1`}>
                        <h4>Last edit: {time}</h4>
                        <HistoryAttachment />
                        <Birthday />
                    </div>
                    <div
                        className={`${baseclass}__log_entry_header_2`}>
                        <HistoryEdit />
                        <HistoryDelete />
                    </div>
                </div>
                <div className={`${baseclass}__log_entry_body`}>
                    <span>{children}</span>
                </div>
            </Container>
        </Container>
    );
};

export default LogEntry;
