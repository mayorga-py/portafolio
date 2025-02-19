import React from "react";
import "./Home.css";
import m1 from "../assets/m1.jpg";
import mc from "../assets/mc.webp";
import cvPdf from "../assets/CV_Luis_Eduardo_Mayorga_Becerra_.pdf";
import{ useTranslation } from "react-i18next";

import { CoolMode } from "../components/cool";//eliminar esta linea si no me gusta el efecto

const Home: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="home">
            <div className="titulo">
                <h1>{t("Home.title")}</h1>
            </div>
            <div className="ocp">
                FULL STACK DEVELOPER
            </div>
            <div className="imprin">
                <img src={m1} alt="m1" />
            </div>
            <div className="imprin2">
                <a href={cvPdf} download="CV_Luis_Eduardo_Mayorga_Becerra_.pdf">
                <CoolMode>{/*eliminar esta linea si no me gusta el efecto*/}
                    <div className="image-container">
                        <img src={mc} alt="mc" className="image-rot" />
                        <svg className="circle-text" viewBox="0 0 200 200">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                                />
                            </defs>
                            <text fill="var(--secondary-color)">
                                <textPath
                                    href="#circlePath"
                                    startOffset="50%"
                                    textAnchor="middle"
                                >
                                    Download CV • Full Stack • Creativity •
                                </textPath>
                            </text>
                        </svg>
                    
                    </div>
                </CoolMode>{/*eliminar esta linea si no me gusta el efecto*/}
                </a>
            </div>

            <div className="animated-arrow-container">
                <div className="arrow">
                    <div className="arrow-dot"></div>
                    <div className="arrow-dot"></div>
                    <div className="arrow-dot"></div>
                    <div className="arrow-dot"></div>
                    <div className="arrow-dot"></div>
                </div>
            </div>



        </div>
    );
};

export default Home;
