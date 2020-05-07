import "./Footer.scss";

import React from "react";
import { NavLink } from "react-router-dom";

import Container from "../../atoms/Container";

const Footer = () => {
    const baseclass = "footer";

    window.onclick = function(event: any) {
        const privacyPolicyModal = document.getElementById(
            "privacyPolicyModal",
        )!;
        const licenseModal = document.getElementById("licenseModal")!;

        if (event.target == privacyPolicyModal) {
            privacyPolicyModal.style.display = "none";
        } else if (event.target == licenseModal) {
            licenseModal.style.display = "none";
        }
    };

    return (
        <Container className={baseclass}>
            <footer className={baseclass}>
                <div>
                    <NavLink
                        className="footer-link"
                        to="#"
                        id="myBtn"
                        onClick={() =>
                            (document.getElementById(
                                "privacyPolicyModal",
                            )!.style.display = "block")
                        }>
                        Privacy Policy
                    </NavLink>
                    <NavLink
                        className="footer-link"
                        to="#"
                        id="myBtn"
                        onClick={() =>
                            (document.getElementById(
                                "licenseModal",
                            )!.style.display = "block")
                        }>
                        License
                    </NavLink>
                </div>
                <div>
                    <a
                        className="footer-link"
                        href="https://github.com/MisterEmpyrean/capstone_petpad"
                        target="_blank"
                        rel="noopener noreferrer">
                        GitHub Repo
                    </a>
                    <a
                        className="footer-link"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer">
                        API Docs
                    </a>
                </div>
            </footer>

            <div id="privacyPolicyModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span
                            className="close"
                            onClick={() =>
                                (document.getElementById(
                                    "privacyPolicyModal",
                                )!.style.display = "none")
                            }>
                            &times;
                        </span>
                        <h2>Privacy Policy</h2>
                    </div>
                    <div className="modal-body">
                        <p>License lorem ipsum...</p>
                        <p>License lorem ipsum...</p>
                        <p>License lorem ipsum...</p>
                        <p>License lorem ipsum...</p>
                        <p>License lorem ipsum...</p>
                    </div>
                </div>
            </div>

            <div id="licenseModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span
                            className="close"
                            onClick={() =>
                                (document.getElementById(
                                    "licenseModal",
                                )!.style.display = "none")
                            }>
                            &times;
                        </span>
                        <h2>License</h2>
                    </div>
                    <div className="modal-body">
                        <p>Privacy policy lorem ipsum...</p>
                        <p>Privacy policy lorem ipsum...</p>
                        <p>Privacy policy lorem ipsum...</p>
                        <p>Privacy policy lorem ipsum...</p>
                        <p>Privacy policy lorem ipsum...</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Footer;
