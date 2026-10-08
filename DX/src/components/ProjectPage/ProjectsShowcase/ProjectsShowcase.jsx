import {Picturies} from "../../../assets/Fhoto.js";
import classes from "../ProjectsShowcase/ProjectsShowcase.module.scss";
import React from "react";
import Table from "./table.jsx";



function ProjectsShowcase(){
    return(
        <main className={classes.main}>
            <section>
                <div className={classes.containerText}>
                    <p> Key Features <span>of Our Projects</span> </p>
                    <p>At DigitX, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing.</p>
                </div>
                <Table/>
            </section>
        </main>
    )
}
export default ProjectsShowcase;
