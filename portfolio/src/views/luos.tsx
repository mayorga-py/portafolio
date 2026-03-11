import React from "react";
import luos_1 from "../assets/projects-views/luos_1.png";
import luos_2 from "../assets/projects-views/luos_2.webp";
import luos_3 from "../assets/projects-views/luos_3.webp";
import luos_4 from "../assets/projects-views/luos_4.webp";
import luos_5 from "../assets/projects-views/luos_5.webp";
import luos_6 from "../assets/projects-views/luos_6.webp";
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
                    <li>SEO</li>
                    <li>PROJECT MANAGER</li>
                    <li>WEB DEVELOPER</li>
                    <h3>DATE</h3>
                    <li>FEB 2026</li>
                    <h3>TOOLS</h3>
                    <li>ASTRO</li>
                    <li>TypeScript</li>
                    <li>NODE</li>
                </div>

            </div>
            <div className="dos">
                <img className="covert" src={luos_1} alt="luos_1" />
                <div className="title">LUOS TECH</div>
                <div className="tex">
                    <p>{t("viewluos.p1")}</p>
                </div>
                <div className="im">
                    <img className="covert" src={luos_2} alt="luos_2" />
                </div>
                <div className="tex">
                    <p>{t("viewluos.p2")}</p>
                </div>
                <div className="im">
                    <img className="covert" src={luos_3} alt="luos_3" />
                </div>
                <div className="tex">
                    <p>{t("viewluos.p3")}</p>
                </div>
                <div className="im">
                    <img className="covert" src={luos_4} alt="luos_4" />
                </div>
                <div className="tex">
                    <p>{t("viewluos.p4")}</p>
                </div>
                <div className="im">
                    <img className="covert" src={luos_5} alt="luos_5" />
                </div>
                <div className="tex">
                    <p>{t("viewluos.p5")}</p>
                </div>
                <div className="im">
                    <img className="covert" src={luos_6} alt="luos_6" />
                </div>
                <div className="tex">
                    <p>{t("viewluos.p6")}</p>
                </div>
                <div className="tex">
                    <p>{t("viewluos.p7")}</p>
                    <a href="https://luos.com.mx" target="_blank" rel="noopener noreferrer">
                        https://luos.com.mx
                    </a>
                </div>
                <div className="tex">
                    <p>{t("viewluos.p8")}</p>
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
