import React, { useEffect } from "react";
import "./Cursor.css";

const Cursor: React.FC = () => {
    useEffect(() => {
        // Selecciona el cursor personalizado
        const cursor = document.querySelector(".custom-cursor") as HTMLDivElement;

        // Selecciona todos los elementos interactivos (puedes ajustar esta selección)
        const interactiveElements = document.querySelectorAll("h1");

        // Mueve el cursor a la posición del mouse
        const moveCursor = (e: MouseEvent) => {
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
        };

        // Agrega el efecto de hover al acercarse a un elemento interactivo
        const addHoverEffect = () => {
            cursor.classList.add("hovered");
        };

        // Elimina el efecto de hover al salir del elemento interactivo
        const removeHoverEffect = () => {
            cursor.classList.remove("hovered");
        };

        // Escucha el evento `mousemove` para mover el cursor
        window.addEventListener("mousemove", moveCursor);

        // Escucha los eventos `mouseenter` y `mouseleave` en elementos interactivos
        interactiveElements.forEach(element => {
            element.addEventListener("mouseenter", addHoverEffect);
            element.addEventListener("mouseleave", removeHoverEffect);
        });

        // Limpia los eventos cuando el componente se desmonta
        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactiveElements.forEach(element => {
                element.removeEventListener("mouseenter", addHoverEffect);
                element.removeEventListener("mouseleave", removeHoverEffect);
            });
        };
    }, []);

    // Renderiza un elemento visual que seguirá al cursor
    return <div className="custom-cursor"></div>;
};

export default Cursor;
