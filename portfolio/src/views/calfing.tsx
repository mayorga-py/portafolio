import React from "react";
import Cal1 from "../assets/projects-views/cal1.webp";
import Cal2 from "../assets/projects-views/cal2.webp";
import Cal3 from "../assets/projects-views/cal3.webp";
import Cal4 from "../assets/projects-views/cal4.webp";
import Logo from "../components/Logo";
import"./views.css"
import { Link } from "react-router-dom";


const calfing: React.FC = () => {

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
                <img className="covert" src={Cal1} alt="cal1" />
                <div className="title">CAL-FING</div>
                <div className="tex">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dapibus ipsum, egestas porttitor neque. Nulla dictum, velit et pellentesque pulvinar, justo arcu tempor lorem, vitae euismod ex justo non metus. Nunc feugiat vestibulum arcu ac finibus. Donec vitae maximus felis. </p>
                </div>
                <div className="im">
                    <img src={Cal2} alt="cal2" />
                    <img src={Cal3} alt="cal3" />
                    <img src={Cal4} alt="cal4" />
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

export default calfing;