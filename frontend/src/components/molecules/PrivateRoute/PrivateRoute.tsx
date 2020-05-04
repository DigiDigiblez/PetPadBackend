/* eslint-disable import/no-duplicates */
import * as React from "react";
import { ComponentType } from "react";
import { Redirect, Route } from "react-router-dom";

export interface IRouteProps {
    exact: boolean;
    path: string;
    component: ComponentType;
}

const PrivateRoute = ({ exact, path, component }: IRouteProps) => {
    return localStorage.getItem("auth") === "true" ? (
        <Route exact={exact} path={path} component={component} />
    ) : (
        <Redirect to="/404" />
    );
};

export default PrivateRoute;
