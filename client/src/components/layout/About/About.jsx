import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
const About = () => {
    const visitInstagram = () => {
        window.location = "https://instagram.com/meabhisingh";
    };
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Food-IFY</Typography>

                <div>
                    <div>
                        <span>
                            Food-ify is a web application which is going to bridge the gap between users and
                            sellers. The focus of this application is to cater to the needs of on-growing demand
                            for convenience, on-the-go food experiences in an era marked by the exponential
                            rise of smartphone usage and digitalization. As a platform, Food-ify capitalizes on
                            the advancements of web technology to provide users with a seamless and simple
                            interface for exploring, ordering, and enjoying a diverse range of offerings.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;