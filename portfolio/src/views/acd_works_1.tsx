import React from "react";
import O_1 from "../assets/projects-views/o1.webp";
import O_2 from "../assets/projects-views/o2.webp";
import O_3 from "../assets/projects-views/o3.webp";
import O_4 from "../assets/projects-views/o4.webp";
import O_5 from "../assets/projects-views/o5.webp";
import O_6 from "../assets/projects-views/o6.webp";
import Logo from "../components/Logo";
import"./views.css"
import { Link } from "react-router-dom";


const acd_works_1: React.FC = () => {

    return (
        <div className="layouts">

            <div className="uno"> 
                <div className="work-tools">
                    <h3>WORK</h3>
                    <li>UI/UX</li>
                    <li>NEURAL NETWORK</li>
                    <li>PROJECT MANAGER</li>
                    <h3>DATE</h3>
                    <li>JUN-NOM 2024</li>
                    <h3>TOOLS</h3>
                    <li>FLUTTER</li>
                    <li>PYTHON</li>
                    <li>FIRE BASE</li>
                </div>

            </div>
            <div className="dos">
                <img className="covert" src={O_1} alt="o1" />
                <div className="title">My Works in university</div>
                <div className="tex">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dapibus ipsum, egestas porttitor neque. Nulla dictum, velit et pellentesque pulvinar, justo arcu tempor lorem, vitae euismod ex justo non metus. Nunc feugiat vestibulum arcu ac finibus. Donec vitae maximus felis. </p>
                </div>
                <div className="im">
                    <img src={O_2} alt="o2" />
                    <img src={O_3} alt="o3" />
                    <img src={O_4} alt="o4" />
                    <img src={O_5} alt="o5" />
                    <img src={O_6} alt="o6" />
                </div>
                <div className="tex">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dapibus ipsum, egestas porttitor neque. Nulla dictum, velit et pellentesque pulvinar, justo arcu tempor lorem, vitae euismod ex justo non metus. Nunc feugiat vestibulum arcu ac finibus. Donec vitae maximus felis. </p>
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
