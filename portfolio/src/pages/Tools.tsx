import React from "react";
import "./Tools.css";
import { IconCloud } from "../components/tools_";

const Tools: React.FC = () => {
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
    ];

    const images = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
    );

    return (
        <div className="tools_prin">
            <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background">
                <IconCloud images={images} />
            </div>
        </div>
    );
};

export default Tools;
