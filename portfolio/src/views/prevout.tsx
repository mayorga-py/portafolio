import React from "react";
import prevImg_1 from "../assets/projects-views/prev_1.webp";
import prevImg_2 from "../assets/projects-views/prev_2.webp";
import prevImg_3 from "../assets/projects-views/prev_3.webp";
import prevImg_4 from "../assets/projects-views/prev_4.webp";
import prevImg_5 from "../assets/projects-views/prev_5.webp";
import prevImg_6 from "../assets/projects-views/prev_6.webp";
import Logo from "../components/Logo";
import"./views.css"
import { Link } from "react-router-dom";
import{ useTranslation } from "react-i18next";

const prevout: React.FC = () => {
        const { t } = useTranslation();
    return (
        <div className="layouts">

            <div className="uno"> 
                <div className="work-tools">
                    <h3>WORK</h3>
                    <li>UI/UX</li>
                    <li>NEURAL NETWORK</li>
                    <li>PROJECT MANAGER</li>
                    <h3>DATE</h3>
                    <li>JUN-NOV 2024</li>
                    <h3>TOOLS</h3>
                    <li>FLUTTER</li>
                    <li>PYTHON</li>
                    <li>FIRE BASE</li>
                </div>

            </div>
            <div className="dos">
                <img className="covert" src={prevImg_1} alt="prev_1" />
                <div className="title">PREV-OUT</div>
                <div className="tex">
                    <p>{t("viewprev.p1")}</p>
                </div>
                <div className="im">
                    <img src={prevImg_2} alt="prev_2" />
                </div>
                <div className="tex">
                    <p>{t("viewprev.p2")}</p>
                </div>
                <div className="im">
                    <img src={prevImg_3} alt="prev_3" />
                    <img src={prevImg_4} alt="prev_4" />
                    <img src={prevImg_5} alt="prev_5" />
                    <img src={prevImg_6} alt="prev_6" />
                </div>
                <div className="tex">
                    <p>{t("viewprev.p3")}</p>
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

export default prevout;
