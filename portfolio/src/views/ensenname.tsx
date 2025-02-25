import React from "react";
import En1 from "../assets/projects-views/en1.webp";
import En2 from "../assets/projects-views/en2.webp";
import En3 from "../assets/projects-views/en3.webp";
import En4 from "../assets/projects-views/en4.webp";
import En5 from "../assets/projects-views/en5.webp";
import En6 from "../assets/projects-views/en6.webp";
import Logo from "../components/Logo";
import"./views.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Ensenname: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="layouts">

            <div className="uno"> 
                <div className="work-tools">
                    <h3>WORK</h3>
                    <li>DEVELOPER</li>
                    <li>MAKER</li>
                    <li>PROJECT MANAGER</li>
                    <h3>DATE</h3>
                    <li>NOV 2022</li>
                    <h3>TOOLS</h3>
                    <li>PYTHON</li>
                    <li>OpenCv</li>
                    <li>Mediapipe</li>
                </div>

            </div>
            <div className="dos">
                <img className="covert" src={En4} alt="en4" />
                <div className="title">ENSEÑAME</div>
                <div className="tex">
                    <p> {t("vien.p1")}</p>
                </div>
                <div className="im">
                    <img src={En2} alt="en2" />
                    <div className="tex"><p> {t("vien.p2")}</p></div>
                    <img src={En1} alt="en1" />
                    <img src={En3} alt="en3" />
                    <img src={En5} alt="en5" />
                    <img src={En6} alt="en6" />
                </div>
                <div className="tex"><p>{t("vien.p3")}</p></div>
        
            </div>
            <div className="tres"> 
                <Link to="/#projects">
                    <Logo variant="views" />
                </Link>
            </div>
        </div>
    );
};


export default Ensenname;
