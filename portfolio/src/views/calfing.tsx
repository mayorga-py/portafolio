import React from "react";
import Cal01 from "../assets/projects-views/cal01.png";
import Cal2 from "../assets/projects-views/cal2.webp";
import Cal3 from "../assets/projects-views/cal3.png";
import Cal4 from "../assets/projects-views/cal4.png";
import Cal5 from "../assets/projects-views/cal5.png";
import Cal6 from "../assets/projects-views/cal6.png";
import Cal7 from "../assets/projects-views/cal7.png";
import Logo from "../components/Logo";
import"./views.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



const calfing: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="layouts">

            <div className="uno"> 
                <div className="work-tools">
                    <h3>WORK</h3>
                    <li>UI/UX</li>
                    <li>BACKEND</li>
                    <li>PROJECT MANAGER</li>
                    <h3>DATE</h3>
                    <li>APR-MAY 2024</li>
                    <h3>TOOLS</h3>
                    <li>JS</li>
                    <li>CSS</li>
                    <li>HTML</li>
                </div>

            </div>
            <div className="dos">
                <img className="covert" src={Cal01} alt="cal01" />
                <div className="title">CAL-FING</div>
                <div className="tex">
                    <p>{t("vical.p1")} </p>
                </div>
                <div className="im">
                    <img src={Cal2} alt="cal2" />
                    <div className="tex">{t("vical.p2")}</div>
                    <img src={Cal3} alt="cal3" />
                    <img src={Cal4} alt="cal4" />
                    <img src={Cal5} alt="cal5" />
                    <div className="tex">{t("vical.p3")}</div>
                    <img src={Cal6} alt="cal6" />
                    <img src={Cal7} alt="cal7" />
                    <div className="tex">{t("vical.p4")}</div>
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

export default calfing;