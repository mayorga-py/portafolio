import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useTranslation } from "react-i18next";
import "./About.css"

const About: React.FC = () => {
    const { t } = useTranslation(); 
    const [showNotification, setShowNotification] = React.useState(false);
    function copyToClipboard(text: string) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 2000);

          })
          .catch((err) => {
            console.error("Error al copiar el texto: ", err);
          });
      }
      
    return (
        <div id="about" className="about-section">
            <div className="inabout">
                <p>---</p>
                <ul>
                    <p>{t("ABOUTview.INTRO")}</p>
                    <p>{t("ABOUTview.STUD")}</p>
                    <p>{t("ABOUTview.VALUES")}</p>
                    <p>{t("ABOUTview.PASSION")}</p>
                </ul>
                <p>---</p>

                <p>{t("ABOUTview.TALK_TO_ME")}</p>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/luis-mayorga-082291252" target="_blank" rel="noopener noreferrer" style={{color: "#0a66c2"}} data-tooltip="LinkedIn">
                        <i className="fab fa-linkedin"></i> {/* LinkedIn */}
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{color: "#fceb53"}} data-tooltip="GitHub">
                        <i className="fab fa-github"></i> {/* GitHub */}
                    </a>
                    <a href="https://www.instagram.com/mayorga.py/" target="_blank" rel="noopener noreferrer" style={{color: "#ff0062"}} data-tooltip="Instagram">
                        <i className="fab fa-instagram"></i> {/* Instagram */}
                    </a>
                    <a /*href="mailto:youremail@example.com"*/ onClick={() => copyToClipboard("eduardo.bmayorga@gmail.com")} style={{color: "#be7e7e"}} data-tooltip="Email">
                        <i className="fas fa-envelope"></i> {/* Email */}
                    </a>
                </div>
            </div>
            {showNotification && (
                <div className="loader">
                    <div className="copy-notification">
                    {t("ABOUTview.COPIED")}</div>
                    <div className="loader_cube loader_cube--glowing"></div>
                </div>
                
                
            )}
        </div>
    );
};

export default About;