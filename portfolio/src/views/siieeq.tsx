import React from "react";
import Logo from "../components/Logo";
import"./views.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const siieeq: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="layouts">

            <div className="uno"> 
                <div className="work-tools">
                    <h3>WORK</h3>
                    <li>°</li>
                    <li>°</li>
                    <li>°</li>
                    <h3>DATE</h3>
                    <li>°</li>
                    <h3>TOOLS</h3>
                    <li>°</li>
                    <li>°</li>
                    <li>°</li>
                </div>

            </div>
            <div className="dos">
                <div className="title">THIS PAGE IS IN DEVELOPMENT...</div>
                <div className="tex">
                    <p>{t("siieq.t1")}</p>
                </div>
                <div className="im">
                </div>
                <div className="tex">
                    <p>{t("siieq.t2")}</p>
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

export default siieeq;