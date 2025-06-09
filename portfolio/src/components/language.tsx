import language from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      appbar: {
        ABOUT: "ABOUT ME",
        PROJECTS: "PROJECTS",
        TECHNOLOGIES: "TECHNOLOGIES",
      },
      Home: {
        title: "HI, I´M Luis Eduardo Mayorga Becerra",
        subt: "FULL STACK DEVELOPER",
      },
      ABOUTview: {
        INTRO: "Hiii :D, I'm Luis, a dedicated Full Stack Developer with a strong focus on UX/UI design and a comprehensive approach to problem-solving, I have experience leading teams and excel in creating user-centered solutions.",
        STUD: "Currently, I am growing professionally while studying Computer Systems Engineering (9.º out of 10.º), which allows me to stay up to date with the latest trends and technologies in software development.",
        VALUES: "I pride myself on being hardworking and empathetic, with a positive attitude towards service and a commitment to continuous improvement. My core values include honesty and autonomy.",
        PASSION: "I'm passionate about growing in the fields of software development and business development and I'm always eager to take on new challenges.",
        TALK_TO_ME: "Talk to me here",
        COPIED: "Email copied to clipboard!"
      },
      projects: {
        PROJECTS: "PROJECTS",
        AND: "AND",
        WORK: "WORK",
      },
      siieq: {
        t1: "This project is currently under development. Please be patient as we continue to add new content.",
        t2: "You can view other projects on the homepage."
      },
      tools: {
        some: "This is a some tehcnologies with I use"
      },
      viewprev: {
        p1: "Prev-out is a project developed for the Universidad Politécnica de Querétaro  (UPQ), it's main goal is to help the institution identify students at higher risk of dropping out by analyzing the results of the psychometric test conducted during the admission process this enables the university to optimize resource allocation and implement targeted support strategies to enhance student retention.",
        p2: "The system operates using an LSTM recurrent neural network trained with data from three student generations once an Excel file with the data to predict is prepared, it is uploaded to a Flask server, which returns the Excel file with prediction results and a JSON file, the JSON file enables additional features such as generating graphs, listing within the app and searching by student ID.",
        p3: "Within the app two types of users can be created: “user” and “admin”. The admin can create or delete users while the user has access only to the basic features of the application."
      },
      vien: {
        p1: "Enseñame is a project that earned first place at the “Querétaro Digital 2022” hackathon, a 44-hour event with 15 teams from various public and private universities, the recognition was awarded for its innovative approach and its social impact on education.",
        p2: "The project is a sign language-to-speech translator developed using Python, OpenCV, and Mediapip it was created to help reduce the educational barriers faced by deaf individuals. This system promotes inclusive communication and aims to create more opportunities for their integration into educational environments.",
        p3: "The design focuses on being accessible and easy to use, benefiting people of all ages and contributing to a more inclusive education system. Enseñame is a clear example of how technology can be leveraged to address significant social challenges."
      },
      vical: {
        p1: "This project was designed to make solving physics problems easier by focusing on three main topics: acoustics, optics, and modern physics, each topic includes theoretical information to enhance understanding, and together, they provide 34 formulas that can be applied to a variety of problems.",
        p2: "In the “calculadora” section, available for each topic, users can select the formula they need based on the problem they’re solving. ",
        p3: "Simply input the known variables and leave the one you want to calculate blank the calculator will automatically rearrange the equation and provide the result, if you need to calculate another variable from the same formula, just leave that variable blank and fill in the others, the system will calculate the unknown.",
        p4: "The theory section offers key information on each topic, complete with references to the original sources, this project seamlessly combines theory and practice to provide a tool that is both useful and accessible."
      },
      viwork1: {
        p1: "Here you can explore a selection of activities I completed during my academic training in Tecnologías de la Información área Entornos Virtuales y Negocios Digitales (Information Technologies focus on Virtual Environments and Digital Business), these activities include the development of augmented reality applications, virtual reality experiences, and 3D modeling projects.",
        p2: "To carry out these projects, I used tools such as Autodesk Maya, 3ds Max, and Unity, combined with design software like Photoshop and Illustrator. Each project reflects the technical knowledge I acquired.",
      },
    },
  },
  es: {
    translation: {
      Home: {
        title: "HOLA, Soy Luis Eduardo Mayorga Becerra",
        subt: "DESARROLLADOR FULL STACK",
      },
      appbar: {
        ABOUT: "ACERCA DE MI",
        PROJECTS: "PROYECTOS",
        TECHNOLOGIES: "TECNOLOGÍAS",
      },
      ABOUTview: {
        INTRO: "¡Hola! :D Soy Luis, un desarrollador Full Stack dedicado con un fuerte enfoque en el diseño UX/UI y un enfoque integral para resolver problemas. Tengo experiencia liderando equipos y destaco en la creación de soluciones centradas en el usuario.",
        STUD: "Actualmente, estoy desarrollándome como profesional estudiando Ingeniería en Sistemas Computacionales (8.º cuatrimestre de 10.º), lo que me permite mantenerme al día con las últimas tendencias y tecnologías en desarrollo de software.",
        VALUES: "Me enorgullezco de ser trabajador y empático, con una actitud positiva hacia el servicio y un compromiso con la mejora continua. Mis valores principales incluyen honestidad, integridad, y autonomía.",
        PASSION: "Me apasiona crecer en los campos del desarrollo de software y el desarrollo empresarial, y siempre estoy dispuesto a asumir nuevos desafíos.",
        TALK_TO_ME: "Podemos hablar aquí",
        COPIED: "¡Correo copiado al portapapeles!"
      },
      projects: {
        PROJECTS: "PROYECTOS",
        AND: "&",
        WORK: "TRABAJO",
      },
      siieq: {
        t1: "Este proyecto se encuentra actualmente en desarrollo. Por favor, tenga paciencia mientras continuo agregando contenido nuevo.",
        t2: "Puede ver otros proyectos en la página de inicio."
      },
      tools: {
        some: "Estas son alguas de la herramientas que uso"
      },
      viewprev: {
        p1: "Prev-out es un proyecto desarrollado para la Universidad Politécnica de Querétaro (UPQ), su objetivo principal es ayudar a la institución a identificar a los estudiantes con mayor riesgo de deserción mediante el análisis de resultados de la prueba psicométrica aplicada durante el proceso de admisión, esto permite optimizar la asignación de recursos y diseñar estrategias de apoyo para los estudiantes.",
        p2: "Funciona a través de una red neuronal recurrente LSTM entrenada con datos de tres generaciones de estudiantes y una vez que se dispone de un archivo Excel con los datos a predecir este se carga en un servidor Flask, que devuelve el archivo Excel con los resultados de las predicciones y un archivo JSON, este último permite acceder a funciones adicionales, como la generación de gráficos, el listado dentro de la aplicación y la búsqueda por matrícula.",
        p3: "Dentro de la aplicación, se pueden crear dos tipos de usuarios: user y admin. El admin puede crear o eliminar usuarios, mientras que el user tiene acceso únicamente a las funciones básicas de la aplicación."
      },
      vien: {
        p1: "Enseñame es un proyecto que obtuvo el primer lugar en el hackathon “Querétaro Digital 2022”, un evento de 44 horas donde participaron 15 equipos de diferentes universidades públicas y privadas, el reconocimiento fue gracias a su enfoque innovador y su impacto social en la educación.",
        p2: "Consiste en un traductor de lengua de señas a voz desarrollado en Python con OpenCv y Mediapipe, creado para ayudar a reducir las barreras educativas que enfrentan las personas sordas, este sistema facilita la comunicación inclusiva y busca abrir más oportunidades para su integración en entornos educativos.",
        p3: "Además, el desarrollo se enfoca en ser accesible y fácil de usar, con el objetivo de beneficiar a personas de todas las edades y contribuir a una educación más inclusiva. Enseñame es un claro ejemplo de cómo la tecnología puede usarse para enfrentar desafíos sociales importantes."
      },
      vical: {
        p1: "Este proyecto fue desarrollado para facilitar la resolución de problemas en la materia de física, abarcando tres temas principales: acústica, óptica y física moderna, cada tema incluye información teórica para una mejor comprensión, además en conjunto en los tres temas hay 34 fórmulas que se pueden aplicar a diversos problemas.",
        p2: "En la sección de “calculadora”, disponible en cada tema, los usuarios pueden seleccionar la fórmula que necesitan según el ejercicio a resolver.",
        p3: "Simplemente ingresan las variables conocidas y dejan en blanco la que desean calcular y la calculadora realiza automáticamente el despeje y entrega el resultado, si se llega a necesita calcular otra variable de la misma fórmula, solo es necesario dejarla en blanco e ingresar las demás variables, el sistema calculará la incógnita.",
        p4: "La sección teórica incluye información clave sobre cada tema, acompañada de sus respectivas fuentes, este proyecto combina teoría y práctica para ofrecer una herramienta útil, así como accesible."
      },
      viwork1: {
        p1: "Aquí podrás explorar una selección de actividades que realicé durante mi formación académica en la carrera de Tecnologías de la Información área Entornos Virtuales y Negocios Digitales, estas actividades incluyen el desarrollo de aplicaciones de realidad aumentada, experiencias de realidad virtual y proyectos de modelado en 3D.",
        p2: "Para llevar a cabo estos proyectos, utilicé herramientas como Autodesk Maya, 3ds Max, y Unity, combinadas con software de diseño como Photoshop e Illustrator. Cada trabajo refleja los conocimientos técnicos adquiridos.",
      },
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