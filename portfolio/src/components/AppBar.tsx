import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "./Theme";
import { useTranslation } from "react-i18next";
import "./AppBar.css";

const AppBar: React.FC = () => {
    const [showAppBar, setShowAppBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShowAppBar(false); // Ocultar cuando se hace scroll hacia abajo
        } else {
            setShowAppBar(true); // Mostrar cuando se hace scroll hacia arriba
        }
        setLastScrollY(currentScrollY);
    };

    const handleLogoClick = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        document.body.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <header className={`appbar ${showAppBar ? "visible" : "hidden"}`}>
            <div className="logo-wrapper">
                <Link to="/"  onClick={handleLogoClick}>
                    <Logo />
                </Link>
            </div>
            <nav>
                <ul className="nav-links">
                <li>
                    <Link to="/#about">{t("appbar.ABOUT")}</Link>
                    </li>
                    <li>
                        <Link to="/#projects">{t("appbar.PROJECTS")}</Link>
                    </li>
                    <li>
                        <Link to="/tools">{t("appbar.TECHNOLOGIES")}</Link>
                    </li>
                </ul>
            </nav>
            <div className="switch-container">
                <div className="language-switch">
                    <button className={`language-option en ${i18n.language === "en" ? "active" : ""}`}
                        onClick={() => changeLanguage("en")}>
                        EN</button>
                    <span> / </span>
                    <button className={`language-option es ${i18n.language === "es" ? "active" : ""}`}
                        onClick={() => changeLanguage("es")}>
                        ES</button>
                    <div className="underline"></div>
                </div>
                <input id="themeInput" type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
                <label className="themeSwitch" htmlFor="themeInput" />
            </div>
        </header>
    );
};

export default AppBar;
