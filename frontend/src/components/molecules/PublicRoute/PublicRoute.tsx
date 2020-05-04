/* eslint-disable import/no-duplicates */
import * as React from "react";
import { ComponentType } from "react";
import { Route } from "react-router-dom";

export interface IRouteProps {
    exact?: boolean;
    path?: string;
    component: ComponentType;
}

const PublicRoute = ({ exact, path, component }: IRouteProps) => {
    return <Route exact={exact} path={path} component={component} />;
};

export default PublicRoute;
