import { DATOS_PROFES as PROFES } from "./datosProfesores.js";
import { DATOS_CATEGORIAS as CATEGORIAS, DATOS_NIVELES as NIVELES } from "./datosCategorias&Niveles.js";

export const DATOS_CURSOS = [
    {
        id: "javaScript-inicial",
        nombre: 'JavaScript',
        categorias: [CATEGORIAS[0], CATEGORIAS[4]],
        nivel: NIVELES[0].nombre,
        duracion: 40,
        modalidad: 'Virtual',
        descripcion_corta: 'Aprende los fundamentos de JavaScript, el lenguaje de programación más popular para desarrollo web.',
        descripcion_larga: `Este curso te llevará desde los conceptos básicos de JavaScript hasta técnicas avanzadas de programación. Aprenderás a manipular el DOM, manejar eventos, trabajar con APIs y mucho más. Ideal para quienes desean iniciar su carrera en desarrollo web o mejorar sus habilidades de programación. <br><br> A lo largo del curso, realizarás proyectos prácticos que te permitirán aplicar lo aprendido y construir un portafolio sólido. Al finalizar, estarás preparado para crear aplicaciones web interactivas y dinámicas utilizando JavaScript. <br><br> ¡Inscríbete ahora y comienza tu viaje en el mundo de la programación web!`,
        imagen: 'img/courses/js.jpg',
        precio: 15000,
        objetivos: ['Comprender los conceptos básicos de JavaScript.', 'Manipular el DOM.', 'Crear aplicaciones web interactivas.', 'Trabajar con APIs y manejar eventos.'],
        profesor: PROFES[0],
        fecha_lanzamiento: new Date("2025-11-23"),
        destacado: true,
        cuatrimestres: [
            [
                'Introducción a la programación y JavaScript.',
                'Sintaxis básica: variables, tipos de datos, operadores.',
                'Proyecto práctico: Calculadora y scripts simples.'
            ],
            [
                'Manipulación del DOM y eventos.',
                'Funciones y estructuras de control.',
                'Proyecto práctico: To-Do List interactiva.'
            ],
            [
                'Trabajo con APIs y fetch.',
                'Programación asíncrona y promesas.',
                'Proyecto práctico: Aplicación de clima.'
            ],
            [
                'Buenas prácticas y optimización de código.',
                'Introducción a frameworks/librerías (React, Vue).',
                'Proyecto final: Desarrollo de una aplicación web completa.'
            ]
        ]
    },

    {
        id: "python-intermedio",
        nombre: 'Python',
        categorias: [CATEGORIAS[5], CATEGORIAS[3]],
        nivel: NIVELES[1].nombre,
        duracion: 30,
        modalidad: 'Presencial',
        descripcion_corta: 'Domina Python y sus aplicaciones en desarrollo web, análisis de datos e inteligencia artificial.',
        descripcion_larga: `Python es uno de los lenguajes de programación más populares y versátiles en la actualidad. Su sintaxis sencilla y clara lo convierte en una excelente opción tanto para principiantes como para profesionales. <br><br> En este curso aprenderás desde los conceptos básicos hasta herramientas avanzadas que te permitirán desarrollar aplicaciones, automatizar tareas y trabajar con datos de manera eficiente. Este curso está diseñado para que avances paso a paso, con ejemplos claros y ejercicios que consolidarán tus conocimientos. <br><br> Al finalizar, tendrás las bases necesarias para crear tus propios proyectos y seguir creciendo en el mundo de la programación.`,
        imagen: 'img/courses/cursoPYTHON.jpg',
        precio: 20000,
        objetivos: ['Aprender sintaxis y estructuras de Python.', 'Trabajar con bibliotecas populares.', 'Desarrollar proyectos prácticos.'],
        profesor: PROFES[1],
        fecha_lanzamiento: new Date('2025-11-31'),
        destacado: true,
        cuatrimestres: [
            [
                'Fundamentos de Python y configuración del entorno.',
                'Sintaxis básica: variables, tipos de datos, operadores.',
                'Proyecto práctico: Scripts simples y automatización.'
            ],
            [
                'Estructuras de datos: listas, tuplas, diccionarios y conjuntos.',
                'Funciones y módulos en Python.',
                'Proyecto práctico: Gestión de datos y archivos.'
            ],
            [
                'Introducción a bibliotecas populares: NumPy, Pandas, Matplotlib.',
                'Análisis de datos y visualización.',
                'Proyecto práctico: Análisis de un conjunto de datos real.'
            ],
            [
                'Desarrollo web con Flask o Django.',
                'Introducción a la inteligencia artificial y machine learning con Scikit-learn.',
                'Proyecto final: Desarrollo de una aplicación web o modelo predictivo.'
            ]
        ]
    },

    {
        id: "desarrollo-web-fullstack",
        nombre: 'Web Full Stack',
        categorias: [CATEGORIAS[0], CATEGORIAS[4], CATEGORIAS[3]],
        nivel: NIVELES[2].nombre,
        duracion: 50,
        modalidad: 'Virtual',
        descripcion_corta: 'Conviértete en un desarrollador web full stack dominando tanto el front-end como el back-end.',
        descripcion_larga: `Este curso intensivo de desarrollo web full stack está diseñado para aquellos que desean dominar todas las facetas del desarrollo web. Desde la creación de interfaces de usuario atractivas y responsivas hasta la construcción de servidores robustos y bases de datos eficientes, este curso cubre todo lo que necesitas saber para convertirte en un desarrollador web completo. <br><br> A lo largo del curso, trabajarás en proyectos prácticos que te permitirán aplicar lo aprendido y construir un portafolio sólido. <br><br> Al finalizar, estarás preparado para enfrentar los desafíos del desarrollo web moderno y avanzar en tu carrera profesional.`,
        imagen: 'img/courses/jpeg.jpg',
        precio: 30000,
        objetivos: ['Aprender desarrollo front-end y back-end.', 'Trabajar con bases de datos.', 'Desarrollar aplicaciones web completas.'],
        profesor: PROFES[2],
        fecha_lanzamiento: new Date('2025-11-21'),
        destacado: true,
        cuatrimestres: [
            [
                'Introducción al desarrollo web y herramientas.',
                'HTML5 avanzado y accesibilidad.',
                'CSS3 avanzado y preprocesadores (Sass).'
            ],
            [
                'JavaScript avanzado y ES6+.',
                'Frameworks front-end: React o Angular.',
                'Gestión de estado y rutas.'
            ],
            [
                'Back-end con Node.js, Express y RESTful APIs.',
                'Bases de datos relacionales y no relacionales.',
                'Autenticación, autorización y seguridad.'
            ],
            [
                'DevOps y despliegue de aplicaciones.',
                'Testing y aseguramiento de calidad.',
                'Proyecto final: Desarrollo de una aplicación web full stack.'
            ]
        ]
    },

    {
        id: "godot-intermedio",
        nombre: 'Godot',
        categorias: [CATEGORIAS[1]],
        nivel: NIVELES[2].nombre,
        duracion: 35,
        modalidad: 'presencial',
        descripcion_corta: 'Aprende a crear videojuegos utilizando el motor Godot, desde conceptos básicos hasta técnicas avanzadas.',
        descripcion_larga: `Godot es un motor de videojuegos de código abierto que ha ganado popularidad por su flexibilidad y facilidad de uso. En este curso, te guiaremos a través del proceso de creación de videojuegos utilizando Godot, desde la configuración inicial hasta la publicación de tu juego. <br><br> Aprenderás sobre diseño de niveles, programación de mecánicas de juego, animaciones y efectos visuales. <br><br> Este curso es ideal para aquellos que desean ingresar al mundo del desarrollo de videojuegos y crear experiencias interactivas emocionantes.`,
        imagen: 'img/courses/godot.jpg',
        precio: 18000,
        objetivos: ['Comprender el motor Godot y su interfaz.', 'Diseñar y programar mecánicas de juego.', 'Publicar un videojuego completo.'],
        profesor: PROFES[3],
        fecha_lanzamiento: new Date("2026-01-10"),
        destacado: false,
        cuatrimestres: [
            [
                'Introducción a Godot y configuración del entorno.',
                'Conceptos básicos de nodos y escenas.',
                'Proyecto práctico: Primer juego simple.'
            ],
            [
                'Programación con GDScript.',
                'Diseño de niveles y mecánicas de juego.',
                'Animaciones y efectos visuales.'
            ],
            [
                'Audio y música en juegos.',
                'Optimización y rendimiento.',
                'Publicación y distribución de juegos.'
            ],
            [
                'Proyecto final: Desarrollo de un videojuego completo.',
                'Testing y feedback.',
                'Marketing y promoción de juegos.'
            ]
        ]
    },

    {
        id: "java-avanzado",
        nombre: 'Java',
        categorias: [CATEGORIAS[3]],
        nivel: NIVELES[2].nombre,
        duracion: 45,
        modalidad: 'virtual',
        descripcion_corta: 'Domina Java, uno de los lenguajes de programación más utilizados en el desarrollo de aplicaciones empresariales y móviles.',
        descripcion_larga: 'Java es un lenguaje de programación robusto y versátil que se utiliza en una amplia variedad de aplicaciones, desde aplicaciones empresariales hasta desarrollo móvil con Android. En este curso, aprenderás desde los fundamentos de Java hasta conceptos avanzados como programación orientada a objetos, manejo de excepciones, colecciones y multihilo. A lo largo del curso, trabajarás en proyectos prácticos que te permitirán aplicar lo aprendido y desarrollar tus habilidades de programación. Al finalizar, estarás preparado para enfrentar desafíos en el desarrollo de software utilizando Java.',
        imagen: 'img/courses/cursoJAVA.jpg',
        precio: 25000,
        objetivos: ['Aprender sintaxis y estructuras de Java.', 'Programación orientada a objetos.', 'Desarrollar aplicaciones prácticas.'],
        profesor: PROFES[4],
        fecha_lanzamiento: new Date('2025-12-20'),
        destacado: false,
        cuatrimestres: [
            [
                'Fundamentos de Java y configuración del entorno.',
                'Sintaxis básica: variables, tipos de datos, operadores.',
                'Proyecto práctico: Aplicación de consola simple.'
            ],
            [
                'Programación orientada a objetos en Java.',
                'Manejo de excepciones y colecciones.',
                'Introducción a JavaFX para interfaces gráficas.'
            ],
            [
                'Desarrollo de aplicaciones web con Java Servlets y JSP.',
                'Bases de datos con JDBC.',
                'Introducción a frameworks como Spring.'
            ],
            [
                'Desarrollo móvil con Android.',
                'Testing y depuración de aplicaciones Java.',
                'Proyecto final: Desarrollo de una aplicación completa.'
            ]
        ]
    },

    {
        id: "c-sharp-basico",
        nombre: 'C#',
        categorias: [CATEGORIAS[1]],
        nivel: NIVELES[0].nombre,
        duracion: 25,
        modalidad: 'virtual',
        descripcion_corta: 'Inicia tu camino en la programación con C#, un lenguaje potente y versátil utilizado en desarrollo de aplicaciones y videojuegos.',
        descripcion_larga: `C# es un lenguaje de programación desarrollado por Microsoft que se utiliza ampliamente en el desarrollo de aplicaciones de escritorio, web y videojuegos con Unity. <br><br> En este curso, aprenderás los fundamentos de C#, incluyendo sintaxis básica, estructuras de control, programación orientada a objetos y manejo de excepciones. A lo largo del curso, trabajarás en proyectos prácticos que te permitirán aplicar lo aprendido y desarrollar tus habilidades de programación. <br><br> Al finalizar, estarás preparado para continuar tu aprendizaje en áreas más avanzadas del desarrollo con C#.`,
        imagen: 'img/courses/sharpCurso.jpg',
        precio: 12000,
        objetivos: ['Aprender sintaxis y estructuras de C#.', 'Programación orientada a objetos.', 'Desarrollar aplicaciones prácticas.'],
        profesor: PROFES[5],
        fecha_lanzamiento: new Date('2025-12-03'),
        destacado: false,
        cuatrimestres: [
            [
                'Fundamentos de C# y configuración del entorno.',
                'Sintaxis básica: variables, tipos de datos, operadores.',
                'Proyecto práctico: Aplicación de consola simple.'
            ],
            [
                'Programación orientada a objetos en C#.',
                'Manejo de excepciones y colecciones.',
                'Introducción a Windows Forms para interfaces gráficas.'
            ],
            [
                'Desarrollo de aplicaciones web con ASP.NET.',
                'Bases de datos con Entity Framework.',
                'Introducción a Unity para desarrollo de videojuegos.'
            ],
            [
                'Testing y depuración de aplicaciones C#.',
                'Proyecto final: Desarrollo de una aplicación completa.'
            ]
        ]
    },

    {
        id: "firebase-avanzado",
        nombre: 'Firebase',
        categorias: [CATEGORIAS[2]],
        nivel: NIVELES[2].nombre,
        duracion: 20,
        modalidad: 'presencial',
        descripcion_corta: 'Domina Firebase, la plataforma de desarrollo de aplicaciones móviles y web de Google, para crear aplicaciones escalables y en tiempo real.',
        descripcion_larga: `Firebase es una plataforma de desarrollo de aplicaciones que ofrece una amplia gama de herramientas y servicios para crear aplicaciones móviles y web escalables y en tiempo real. <br><br> En este curso avanzado, aprenderás a utilizar Firebase para gestionar bases de datos en tiempo real, autenticación de usuarios, almacenamiento de archivos y funciones en la nube. A lo largo del curso, trabajarás en proyectos prácticos que te permitirán aplicar lo aprendido y desarrollar tus habilidades en el desarrollo de aplicaciones modernas. <br><br> Al finalizar, estarás preparado para integrar Firebase en tus proyectos y aprovechar al máximo sus capacidades.`,
        imagen: 'img/courses/firebase.jpg',
        precio: 22000,
        objetivos: ['Aprender a utilizar Firebase y sus servicios.', 'Gestionar bases de datos en tiempo real.', 'Desarrollar aplicaciones escalables.'],
        profesor: PROFES[6],
        fecha_lanzamiento: new Date('2026-02-15'),
        destacado: false,
        cuatrimestres: [
            [
                'Introducción a Firebase y configuración del entorno.',
                'Bases de datos en tiempo real con Firestore.',
                'Proyecto práctico: Aplicación de chat en tiempo real.'
            ],
            [
                'Autenticación de usuarios con Firebase Auth.',
                'Almacenamiento de archivos con Firebase Storage.',
                'Funciones en la nube con Firebase Cloud Functions.'
            ],
            [
                'Integración de Firebase con aplicaciones móviles y web.',
                'Optimización y seguridad en Firebase.',
                'Proyecto práctico: Desarrollo de una aplicación completa con Firebase.'
            ],
            [
                'Testing y depuración de aplicaciones con Firebase.',
                'Proyecto final: Desarrollo de una aplicación escalable utilizando Firebase.',
                'Despliegue y monitoreo de aplicaciones Firebase.'
            ]
        ]
    }
]

