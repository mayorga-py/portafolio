import React from "react";
import "./Tools.css";
import { useTranslation } from "react-i18next";
import { IconCloud } from "../components/tools_";

const Tools: React.FC = () => {
    const { t } = useTranslation(); 
    const slugs = [
        "typescript",
        "unity",
        "python",
        "dart",
        "java",
        "react",
        "flutter",
        "html5",
        "css3",
        "firebase",
        "git",
        "github",
        "visualstudiocode",
        "figma",
        "mysql",
        "laravel",
        "php",
        "c#",
        "sqlserver",
        "autodesk",
        "adobe",

    ];

    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
    );

    return (
        <div className="tools_prin">
            <div>
                <p>{t("tools.some")}</p>
            </div>
            <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background">
                <IconCloud images={images} />
            </div>
        </div>
    );
};

export default Tools;
