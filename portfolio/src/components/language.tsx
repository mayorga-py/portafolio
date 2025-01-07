import language from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en:{
        translation:{
        appbar: {
          ABOUT: "ABOUT",
          PROJECTS: "PROJECTS",
          TECHNOLOGIES: "TECHNOLOGIES",
        },
        Home:{
          title: "HI, I´M Luis Eduardo Mayorga Becerra",
          subt: "FULL STACK DEVELOPER",
        },
        ABOUTview: {
          INTRO: "Hiii :D, I'm Luis, a dedicated Full Stack Developer with a strong focus on UX/UI design and a comprehensive approach to problem-solving, I have experience leading teams and excel in creating user-centered solutions.",
          VALUES: "I pride myself on being hardworking and empathetic, with a positive attitude towards service and a commitment to continuous improvement. My core values include honesty and autonomy.",
          PASSION: "I'm passionate about growing in the fields of software development and business development and I'm always eager to take on new challenges.",
          TALK_TO_ME: "Talk to me here",
          COPIED: "Email copied to clipboard!"
      },
      projects:{
        PROJECTS:"PROJECTS",
        AND:"AND",
        WORK:"WORK",
      },
      siieq:{
        t1: "This project is currently under development. Please be patient as we continue to add new content.",
        t2: "You can view other projects on the homepage."
      }
      }
    },
    es:{
        translation:{
            Home:{
              title: "HOLA, SOY Luis Eduardo Mayorga Becerra",
              subt: "DESARROLLADOR FULL STACK",
            },
            appbar:{
              ABOUT: "ACERCA DE MI",
              PROJECTS: "PROYECTOS",
              TECHNOLOGIES: "TECNOLOÍAS",
            },
            ABOUTview: {
              INTRO: "¡Hola! :D Soy Luis, un desarrollador Full Stack dedicado con un fuerte enfoque en el diseño UX/UI y un enfoque integral para resolver problemas. Tengo experiencia liderando equipos y destaco en la creación de soluciones centradas en el usuario.",
              VALUES: "Me enorgullezco de ser trabajador y empático, con una actitud positiva hacia el servicio y un compromiso con la mejora continua. Mis valores principales incluyen honestidad, integridad, y autonomía.",
              PASSION: "Me apasiona crecer en los campos del desarrollo de software y el desarrollo empresarial, y siempre estoy dispuesto a asumir nuevos desafíos.",
              TALK_TO_ME: "Podemos hablar aquí",
              COPIED: "¡Correo copiado al portapapeles!"
          },
          projects:{
            PROJECTS:"PROYECTOS",
            AND:"&",
            WORK:"TRABAJO",
          },
          siieq:{
            t1: "Este proyecto se encuentra actualmente en desarrollo. Por favor, tenga paciencia mientras continuamos agregando contenido nuevo.",
            t2: "Puede ver otros proyectos en la página de inicio."
          }
        },
    },
};

language
.use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React ya maneja la seguridad contra XSS
  },
});

export default language;