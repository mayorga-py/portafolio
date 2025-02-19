import React, { useState, useRef } from "react";
import "./Projects.css"
import siieeq from "../assets/projects/siieeq.webp";
import calFiImage from "../assets/projects/calfi.webp";
import prevOutImage from "../assets/projects/prevout.webp";
import enseNname from "../assets/projects/ensenname.webp";
import works from "../assets/projects/works.webp"
import { useTranslation } from "react-i18next";


const projects = [
    { name: "SIIEEQ", image: siieeq, link: "/views/siieeq" },
    { name: "PREV-OUT", image: prevOutImage, link: "/views/prevout" },
    { name: "CAL-FING", image: calFiImage, link: "/views/calfing" },
    { name: "Acd. Works 1", image: works, link: "/views/acd_works_1" },
    { name: "ENSEÑAME", image: enseNname, link: "/views/ensenname" },
    // Agrega más proyectos según sea necesario
  ];

const Projects: React.FC = () => {
    const {t} = useTranslation();
    const [activeImage, setActiveImage] = React.useState<string | null>(null);
    const [fadeOut, setFadeOut] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const handleHover = (image: string | null) => {
        if (image) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
            setFadeOut(false);
            setActiveImage(image);
        }
    };
    const handleMouseLeave = () => {
        setFadeOut(true);
        timeoutRef.current = setTimeout(() => {
            setActiveImage(null);
            setFadeOut(false);
        }, 500);
    };
    
    return (
        <div id="projects" className="project-section">
            <div className={`project-images ${activeImage ? "active" : ""} ${fadeOut ? "fade-out" : ""}`}
                style={{ backgroundImage: activeImage ? `url(${activeImage})` : "none" }}>
            </div>
            <div className="project-titles">
                <div className="p-line1">
                    <p className="projects-tex">{t("projects.PROJECTS")}</p>
                    <p className="and-tex">{t("projects.AND")}</p>
                    <p className="work-tex">{t("projects.WORK")}</p>
                </div>
                <div className="projects-list" onMouseLeave={handleMouseLeave}>
                    {projects.map((projects)=>(
                        <p
                        key={projects.name}
                        onMouseEnter={()=>handleHover(projects.image)}
                        onMouseLeave={() => handleHover(null)}
                        onClick={()=>window.location.href = (projects.link)}
                        >
                            {projects.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
