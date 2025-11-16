export const DATOS_CURSOS = [
    {
        id: "javaScript-principiante",
        nombre: 'Curso de JavaScript',
        nivel: 'principiante',
        duracion: 40,
        modalidad: 'virtual',
        descripcion_corta: 'Aprende los fundamentos de JavaScript, el lenguaje de programación más popular para desarrollo web.',
        descripcion_larga: 'Este curso te llevará desde los conceptos básicos de JavaScript hasta técnicas avanzadas de programación. Aprenderás a manipular el DOM, manejar eventos, trabajar con APIs y mucho más. Ideal para quienes desean iniciar su carrera en desarrollo web.',
        imagen: 'img/cursos/js.jpg',
        precio: 15000,
        objetivos: '- Comprender los conceptos básicos de JavaScript.\n- Manipular el DOM.\n- Crear aplicaciones web interactivas.',
        profesor: 'Diego Merlo Sogaray',
        fecha_lanzamiento: new Date('2025-10-01'),
        destacado: true,
        cuatrimestre: {
            primer_cuatri: [
                'Introducción a la programación y al lenguaje Python.',
                'Sintaxis básica: variables, tipos de datos, operadores.',
                'Proyecto práctico: Calculadora y scripts simples.'
            ],
            segundo_cuatri: [
                'Listas, tuplas, diccionarios y conjuntos.',
                'Comprensiones de listas y expresiones lambda.',
                'Introducción a la Programación Orientada a Objetos.'
            ],
            tercer_cuatri: [
                'Librerías esenciales: NumPy, Pandas.',
                'Análisis y manipulación de datos.',
                'Introducción a la automatización con os y shutil.'
            ],
            cuarto_cuatri: [
                'Programación Orientada a Objetos avanzada.',
                'Desarrollo de aplicaciones web con Flask o FastAPI.',
                'Proyecto final: Aplicación completa.'
            ]
        }
    },

    {
        id: "python-intermedio",
        nombre: 'Curso de Python',
        nivel: 'intermedio',
        duracion: 30,
        modalidad: 'presencial',
        descripcion_corta: 'Domina Python y sus aplicaciones en desarrollo web, análisis de datos e inteligencia artificial.',
        descripcion_larga: 'Python es uno de los lenguajes de programación más populares y versátiles en la actualidad. Su sintaxis sencilla y clara lo convierte en una excelente opción tanto para principiantes como para profesionales. En este curso aprenderás desde los conceptos básicos hasta herramientas avanzadas que te permitirán desarrollar aplicaciones, automatizar tareas y trabajar con datos de manera eficiente. Este curso está diseñado para que avances paso a paso, con ejemplos claros y ejercicios que consolidarán tus conocimientos. Al finalizar, tendrás las bases necesarias para crear tus propios proyectos y seguir creciendo en el mundo de la programación.',
        imagen: 'img/cursos/cursoPYTHON.jpg',
        precio: 20000,
        objetivos: '- Aprender sintaxis y estructuras de Python.\n- Trabajar con bibliotecas populares.\n- Desarrollar proyectos prácticos.',
        profesor: 'Rey Leon',
        fecha_lanzamiento: new Date('2024-08-15'),
        destacado: true,
        cuatrimestre: {
            primer_cuatri: [
                'Fundamentos de HTML y CSS.',
                'Estructura de una página web.',
                'Proyecto práctico: Página web estática.'
            ],
            segundo_cuatri: [
                'JavaScript básico y manipulación del DOM.',
                'Eventos y formularios.',
                'Introducción a frameworks front-end (React, Vue).' 
            ],
            tercer_cuatri: [
                'Desarrollo back-end con Node.js y Express.',
                'Bases de datos: SQL y NoSQL.',
                'Autenticación y seguridad web.'
            ],
            cuarto_cuatri: [
                'Despliegue de aplicaciones web.',
                'Optimización y buenas prácticas.',
                'Proyecto final: Aplicación web completa.'
            ]
        }
    },

    {
        id: "desarrollo-web-fullstack",
        nombre: 'Curso de Desarrollo Web Full Stack',
        nivel: 'avanzado',
        duracion: 50,
        modalidad: 'virtual',
        descripcion_corta: 'Conviértete en un desarrollador web full stack dominando tanto el front-end como el back-end.',
        descripcion_larga: 'Este curso intensivo de desarrollo web full stack está diseñado para aquellos que desean dominar todas las facetas del desarrollo web. Desde la creación de interfaces de usuario atractivas y responsivas hasta la construcción de servidores robustos y bases de datos eficientes, este curso cubre todo lo que necesitas saber para convertirte en un desarrollador web completo. A lo largo del curso, trabajarás en proyectos prácticos que te permitirán aplicar lo aprendido y construir un portafolio sólido. Al finalizar, estarás preparado para enfrentar los desafíos del desarrollo web moderno y avanzar en tu carrera profesional.',
        imagen: 'img/cursos/jpeg.jpg',
        precio: 30000,
        objetivos: '- Aprender desarrollo front-end y back-end.\n- Trabajar con bases de datos.\n- Desarrollar aplicaciones web completas.',
        profesor: 'Vistor Ugarriza',
        fecha_lanzamiento: new Date('2025-11-01'),
        destacado: true,
        cuatrimestre: {
            primer_cuatri: [
                'Introducción al desarrollo web y herramientas.',
                'HTML5 avanzado y accesibilidad.',
                'CSS3 avanzado y preprocesadores (Sass).'
            ],
            segundo_cuatri: [
                'JavaScript avanzado y ES6+.',
                'Frameworks front-end: React o Angular.',
                'Gestión de estado y rutas.'
            ],
            tercer_cuatri: [
                'Back-end con Node.js, Express y RESTful APIs.',
                'Bases de datos relacionales y no relacionales.',
                'Autenticación, autorización y seguridad.'
            ],
            cuarto_cuatri: [
                'DevOps y despliegue de aplicaciones.',
                'Testing y aseguramiento de calidad.',
                'Proyecto final: Desarrollo de una aplicación web full stack.'
            ]
        }
    },

    {
        id: "godot-intermedio",
        nombre: 'Curso de Godot',
        nivel: 'intermedio',
        duracion: 35,
        modalidad: 'presencial',
        descripcion_corta: 'Aprende a crear videojuegos utilizando el motor Godot, desde conceptos básicos hasta técnicas avanzadas.',
        descripcion_larga: 'Godot es un motor de videojuegos de código abierto que ha ganado popularidad por su flexibilidad y facilidad de uso. En este curso, te guiaremos a través del proceso de creación de videojuegos utilizando Godot, desde la configuración inicial hasta la publicación de tu juego. Aprenderás sobre diseño de niveles, programación de mecánicas de juego, animaciones y efectos visuales. Este curso es ideal para aquellos que desean ingresar al mundo del desarrollo de videojuegos y crear experiencias interactivas emocionantes.',
        imagen: 'img/cursos/godot.jpg',
        precio: 18000,
        objetivos: '- Comprender el motor Godot y su interfaz.\n- Diseñar y programar mecánicas de juego.\n- Publicar un videojuego completo.',
        profesor: 'Ginxu Giñones',
        fecha_lanzamiento: new Date('2026-03-10'),
        destacado: false,
        cuatrimestre: {
            primer_cuatri: [
                'Introducción a Godot y configuración del entorno.',
                'Conceptos básicos de nodos y escenas.',
                'Proyecto práctico: Primer juego simple.'
            ],
            segundo_cuatri: [
                'Programación con GDScript.',
                'Diseño de niveles y mecánicas de juego.',
                'Animaciones y efectos visuales.'
            ],
            tercer_cuatri: [
                'Audio y música en juegos.',
                'Optimización y rendimiento.',
                'Publicación y distribución de juegos.'
            ],
            cuarto_cuatri: [
                'Proyecto final: Desarrollo de un videojuego completo.',
                'Testing y feedback.',
                'Marketing y promoción de juegos.'
            ]
        }
    },

    {
        id: "java-avanzado",
        nombre: 'Curso de Java',
        nivel: 'avanzado',
        duracion: 45,
        modalidad: 'virtual',
        descripcion_corta: 'Domina Java, uno de los lenguajes de programación más utilizados en el desarrollo de aplicaciones empresariales y móviles.',
        descripcion_larga: 'Java es un lenguaje de programación robusto y versátil que se utiliza en una amplia variedad de aplicaciones, desde aplicaciones empresariales hasta desarrollo móvil con Android. En este curso, aprenderás desde los fundamentos de Java hasta conceptos avanzados como programación orientada a objetos, manejo de excepciones, colecciones y multihilo. A lo largo del curso, trabajarás en proyectos prácticos que te permitirán aplicar lo aprendido y desarrollar tus habilidades de programación. Al finalizar, estarás preparado para enfrentar desafíos en el desarrollo de software utilizando Java.',
        imagen: 'img/cursos/cursoJAVA.jpg',
        precio: 25000,
        objetivos: '- Aprender sintaxis y estructuras de Java.\n- Programación orientada a objetos.\n- Desarrollar aplicaciones prácticas.',
        profesor: 'Pablo Kronksinski',
        fecha_lanzamiento: new Date('2025-12-20'),
        destacado: false,
        cuatrimestre: {
            primer_cuatri: [
                'Fundamentos de Java y configuración del entorno.',
                'Sintaxis básica: variables, tipos de datos, operadores.',
                'Proyecto práctico: Aplicación de consola simple.'
            ],
            segundo_cuatri: [
                'Programación orientada a objetos en Java.',
                'Manejo de excepciones y colecciones.',
                'Introducción a JavaFX para interfaces gráficas.'
            ],
            tercer_cuatri: [
                'Desarrollo de aplicaciones web con Java Servlets y JSP.',
                'Bases de datos con JDBC.',
                'Introducción a frameworks como Spring.'
            ],
            cuarto_cuatri: [
                'Desarrollo móvil con Android.',
                'Testing y depuración de aplicaciones Java.',
                'Proyecto final: Desarrollo de una aplicación completa.'
            ]
        }
    }
]
