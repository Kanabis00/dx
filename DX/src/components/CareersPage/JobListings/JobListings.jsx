import {Picturies} from "../../../assets/Fhoto.js";
import classes from "../JobListings/JobListings.module.scss";
import Table from "../../ProjectPage/ProjectsShowcase/table.jsx";
import React from "react";
import Tables from "./Tables/Tables.jsx";

function Job() {
    return (
        <main className={classes.main}>
            <section className={classes.section}>
                <div className={classes.containerText}>
                    <p> Job Listings <span>at DigitX</span></p>
                    <p>Explore our current job listings to discover exciting career opportunities that match your skill
                        set and interests. We offer positions in various digital disciplines, including web design,
                        mobile app development, digital marketing, project management, and more. Each job listing
                        provides comprehensive details about the role, responsibilities, qualifications, and benefits.
                        Whether you are an experienced professional or a fresh graduate, we welcome talent from all
                        backgrounds to join our team.</p></div>
                <div className={classes.containerText2}>
                    <Tables/>
                    <Tables/>
                    <Tables/>
                </div>
            </section>
        </main>
    )
}
export default Job;