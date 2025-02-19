import React from "react";
import O_1 from "../assets/projects-views/o1.webp";
import O_2 from "../assets/projects-views/o2.webp";
import O_3 from "../assets/projects-views/o3.jpg";
import O_41 from "../assets/projects-views/o4_1.jpg";
import O_42 from "../assets/projects-views/o4_2.jpg";
import O_43 from "../assets/projects-views/o4_3.jpg";

import O_5 from "../assets/projects-views/o5.webp";
import O_6 from "../assets/projects-views/o6.webp";
import Logo from "../components/Logo";
import { useTranslation } from "react-i18next";
import"./views.css"
import { Link } from "react-router-dom";


const acd_works_1: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="layouts">

            <div className="uno"> 
                <div className="work-tools">
                    <h3>WORK</h3>
                    <li>3d Modeling</li>
                    <li>3d Animation</li>
                    <li>Augmented Reality Apps</li>
                    <li>Virtual Reality Apps</li>
                    <h3>DATE</h3>
                    <li>2023</li>
                    <h3>TOOLS</h3>
                    <li>AUTODESK MAYA</li>
                    <li>UNITY</li>
                    <li>AUTODESK 3DS MAX</li>
                </div>

            </div>
            <div className="dos">
                <img className="covert" src={O_3} alt="o3" />
                <div className="title">My Works in university</div>
                <div className="tex">
                    <p>{t("viwork1.p1")} </p>
                </div>
                <div className="im">
                    <img src={O_2} alt="o2" />
                    <img src={O_5} alt="o5" />
                    <img src={O_1} alt="o1" />
                    <img src={O_41} alt="o4_1" />
                    <img src={O_42} alt="o4_2" />
                    <img src={O_43} alt="o4_3" />
                    
                    <img src={O_6} alt="o6" />
                </div>
                <div className="tex">
                    <p>{t("viwork1.p2")}</p>
                </div>
        
            </div>
            <div className="tres"> 
                <Link to="/#projects">
                    <Logo variant="views" />
                </Link>
            </div>
        </div>
    );
};

export default acd_works_1;
