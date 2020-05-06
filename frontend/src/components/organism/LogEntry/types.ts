import { ReactNode } from "react";

export interface ILogEntryProps {
    dateCreated: string;
    dateLastModified: string;
    children: ReactNode;
}
