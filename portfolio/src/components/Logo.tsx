import React from "react";
import "./Logo.css";

interface LogoProps {
    variant?: "default" | "views";
}

const Logo: React.FC<LogoProps> = ({ variant = "default"}) => {
    return (
        <div className={`logo-container ${variant}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 65 65"
                className="logo-svg"
            >
                {/* Trapecio Superior Izquierdo */}
                <path
                    className="shape shape-1"
                     d="M15 19.5C18.5899 19.5 21.5 16.5899 21.5 13V7.81064C21.5 2.67018 15.8151 -0.436176 11.489 2.34044L3.48904 7.47511C1.62759 8.66985 0.5 10.7497 0.5 12.9646C0.5 16.5578 3.41342 19.5 7 19.5H15Z"
                />
                {/* Trapecio Superior Derecho */}
                <path
                    className="shape shape-2"
                     d="M7 19.5C3.41015 19.5 0.5 16.5899 0.5 13L0.5 7.81064C0.5 2.67018 6.18491 -0.436176 10.511 2.34044L18.511 7.47511C20.3724 8.66985 21.5 10.7497 21.5 12.9646C21.5 16.5578 18.5866 19.5 15 19.5H7Z"
                />
                {/* Trapecio Inferior Derecho */}
                <path
                    className="shape shape-3"
                    d="M7 0.5C3.41015 0.5 0.5 3.41015 0.5 7L0.5 12.1894C0.5 17.3298 6.18491 20.4362 10.511 17.6596L18.511 12.5249C20.3724 11.3301 21.5 9.25027 21.5 7.03536C21.5 3.44223 18.5866 0.5 15 0.5L7 0.5Z"
                />
                {/* Trapecio Inferior Izquierdo*/}
                <path
                    className="shape shape-4"
                    d="M15 0.5C18.5899 0.5 21.5 3.41015 21.5 7V12.1894C21.5 17.3298 15.8151 20.4362 11.489 17.6596L3.48904 12.5249C1.62759 11.3301 0.5 9.25027 0.5 7.03536C0.5 3.44223 3.41342 0.5 7 0.5L15 0.5Z"
                />
            </svg>
        </div>
    );
};

export default Logo;


