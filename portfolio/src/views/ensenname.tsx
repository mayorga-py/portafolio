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


const Ensenname: React.FC = () => {

    return (
        <div className="layouts">

            <div className="uno"> 
                <div className="work-tools">
                    <h3>WORK</h3>
                    <li>UI/UX</li>
                    <li>NEURAL NETWORK</li>
                    <li>PROJECT MANAGER</li>
                    <h3>DATE</h3>
                    <li>NON 2022</li>
                    <h3>TOOLS</h3>
                    <li></li>
                    <li>PYTHON</li>
                    <li></li>
                </div>

            </div>
            <div className="dos">
                <img className="covert" src={En4} alt="en4" />
                <div className="title">ENSEÑAME</div>
                <div className="tex">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut dapibus ipsum, egestas porttitor neque. Nulla dictum, velit et pellentesque pulvinar, justo arcu tempor lorem, vitae euismod ex justo non metus. Nunc feugiat vestibulum arcu ac finibus. Donec vitae maximus felis. </p>
                </div>
                <div className="im">
                    <img src={En1} alt="en1" />
                    <img src={En2} alt="en2" />
                    <img src={En3} alt="en3" />
                    <img src={En5} alt="en5" />
                    <img src={En6} alt="en6" />
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

export default Ensenname;
