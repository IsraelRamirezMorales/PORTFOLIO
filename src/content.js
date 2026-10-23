// All user-facing text lives here, keyed by language.
// TODO(pending): metrics (Random Forest, modules/users), project screenshots, photo.

export const links = {
  email: 'israelramirezp1@gmail.com',
  github: 'https://github.com/IsraelRamirezMorales',
  linkedin: 'https://www.linkedin.com/in/israel-ramírez-morales-106a56354',
}

export const tech = [
  'Laravel', 'Vue', 'React', 'Python', 'Tailwind', 'PostgreSQL',
  'Neon', 'ThingSpeak API', 'scikit-learn', 'Matplotlib', 'Jira', 'Notion',
]

// `image` is optional: drop a file in /public/projects and set e.g. '/projects/socdep.png'
export const projects = [
  {
    id: 'socdep',
    repo: 'https://github.com/edgarDML22/SOC_DEP_HUB',
    stack: ['Laravel', 'Vue', 'Tailwind', 'PostgreSQL'],
    image: null,
  },
  {
    id: 'clinic',
    repo: 'https://github.com/IsraelRamirezMorales/SYS-GEST-CLINIC',
    stack: ['React', 'Python', 'PostgreSQL (Neon)'],
    image: null,
  },
  {
    id: 'scallfic',
    repo: 'https://github.com/IsraelRamirezMorales/Scall-Fic',
    stack: ['Vue', 'ThingSpeak API', 'Charts'],
    image: null,
  },
]

export const skillGroups = [
  { id: 'frontend', items: ['Vue', 'React', 'Tailwind CSS', 'JavaScript', 'HTML / CSS'] },
  { id: 'backend', items: ['Laravel (PHP)', 'Python', 'REST APIs'] },
  { id: 'data', items: ['Random Forest', 'Matplotlib', 'Data analysis', 'PostgreSQL / Neon'] },
  { id: 'collab', items: ['Scrum & sprints', 'Jira', 'Notion', 'Team communication'] },
]

export const i18n = {
  en: {
    nav: { about: 'About', work: 'Work', research: 'Research', skills: 'Skills', contact: 'Contact' },
    hero: {
      status: 'Open to internships & full-time roles',
      title: 'Frontend & integration developer building web products and data-driven solutions.',
      location: 'Uriangato, Gto. · Morelia, Mich., Mexico',
      cta: 'Get in touch',
      work: 'View work',
    },
    about: {
      title: 'About',
      text: "I'm Israel, a 7th-semester Computer Systems Engineering student at Tecnológico de Morelia. I enjoy turning complex requirements into clean, usable interfaces and connecting them to reliable backends. I've worked in team projects with Scrum, delivered a freelance project for a client, and done applied research with machine learning.",
      facts: [
        ['Education', 'B.Eng. Computer Systems, Tecnológico de Morelia'],
        ['Focus', 'Frontend & system integration'],
        ['Languages', 'Spanish (native) · English (good reading comprehension)'],
        ['Methods', 'Scrum, sprints, Jira, Notion'],
      ],
    },
    work: {
      title: 'Selected work',
      repo: 'View repository',
      role: 'Role',
      placeholder: 'Screenshot coming soon',
      items: {
        socdep: {
          name: 'SocDep-Hub',
          tag: 'Team project · 4 developers',
          role: 'Frontend & Integration Developer',
          desc: 'Management web app for a social and sports club with member, instructor and manager roles, plus business intelligence dashboards. Built over a full semester.',
        },
        clinic: {
          name: 'SYS-GEST-CLINIC',
          tag: 'Team project · 2 developers',
          role: 'Frontend & Integration Developer',
          desc: 'Medical clinic management system with appointment scheduling and doctor timetables. React frontend, Python backend, PostgreSQL hosted on Neon.',
        },
        scallfic: {
          name: 'Scall-Fic',
          tag: 'Freelance · Client project',
          role: 'Solo developer',
          desc: 'Dashboard that visualizes water-quality sensor data with live charts, built for a civil engineer in the hydrology master’s program at UMSNH. Data is read from ThingSpeak through its API.',
        },
      },
    },
    research: {
      title: 'Research',
      project: 'Intelligent assessment of drinking water quality through data analysis and machine learning',
      desc: 'Delfín summer research program, advised by a hydrology master’s researcher at UMSNH. Experimental measurements (color sensors, turbidimeter, among others) were collected in a postgraduate civil engineering lab and used to train a Random Forest model in Python. Results were explored with box plots, scatter plots and correlation charts built with Matplotlib.',
      timeline: [
        ['Summer', 'Delfín Program research project', 'UMSNH, advised by a hydrology master’s researcher'],
        ['2026', 'Poster presentation', 'Congreso Internacional Delfín 2026 · UT Bahía de Banderas, Nayarit'],
        ['2026', 'Oral presentation', '15º Encuentro de Jóvenes Investigadores del Estado de Michoacán'],
      ],
    },
    skills: {
      title: 'Skills',
      groups: { frontend: 'Frontend', backend: 'Backend', data: 'Data & databases', collab: 'Collaboration' },
    },
    contact: {
      title: "Let's work together.",
      text: 'Looking for internships and full-time opportunities. The fastest way to reach me is email.',
      copy: 'Copy email',
      copied: 'Copied!',
    },
    footer: 'Designed & built by Israel Ramírez Morales',
  },
  es: {
    nav: { about: 'Sobre mí', work: 'Proyectos', research: 'Investigación', skills: 'Habilidades', contact: 'Contacto' },
    hero: {
      status: 'Disponible para prácticas y empleo',
      title: 'Desarrollador frontend e integrador de sistemas que crea productos web y soluciones basadas en datos.',
      location: 'Uriangato, Gto. · Morelia, Mich., México',
      cta: 'Contáctame',
      work: 'Ver proyectos',
    },
    about: {
      title: 'Sobre mí',
      text: 'Soy Israel, estudiante de 7º semestre de Ingeniería en Sistemas Computacionales en el Tecnológico de Morelia. Me gusta convertir requerimientos complejos en interfaces limpias y usables, y conectarlas con backends confiables. He trabajado en proyectos en equipo con Scrum, entregado un proyecto freelance para un cliente y participado en investigación aplicada con aprendizaje automático.',
      facts: [
        ['Educación', 'Ing. en Sistemas Computacionales, Tecnológico de Morelia'],
        ['Enfoque', 'Frontend e integración de sistemas'],
        ['Idiomas', 'Español (nativo) · Inglés (buena comprensión lectora)'],
        ['Metodologías', 'Scrum, sprints, Jira, Notion'],
      ],
    },
    work: {
      title: 'Proyectos destacados',
      repo: 'Ver repositorio',
      role: 'Rol',
      placeholder: 'Captura próximamente',
      items: {
        socdep: {
          name: 'SocDep-Hub',
          tag: 'Proyecto en equipo · 4 desarrolladores',
          role: 'Frontend e Integration Developer',
          desc: 'Aplicación web para la gestión de un club social y deportivo con roles de socio, instructor y gerente, además de paneles de business intelligence. Desarrollada durante un semestre completo.',
        },
        clinic: {
          name: 'SYS-GEST-CLINIC',
          tag: 'Proyecto en equipo · 2 desarrolladores',
          role: 'Frontend e Integration Developer',
          desc: 'Sistema de gestión de clínica médica con agenda de citas y horarios. Frontend en React, backend en Python y PostgreSQL alojada en Neon.',
        },
        scallfic: {
          name: 'Scall-Fic',
          tag: 'Freelance · Proyecto para cliente',
          role: 'Desarrollador único',
          desc: 'Panel que visualiza con gráficas datos de sensores de calidad del agua, hecho para una ingeniera civil de la maestría en hidrología de la UMSNH. Los datos se leen de ThingSpeak mediante su API.',
        },
      },
    },
    research: {
      title: 'Investigación',
      project: 'Evaluación inteligente de la calidad del agua potable mediante análisis de datos y aprendizaje automático',
      desc: 'Proyecto de verano del Programa Delfín, asesorado por un investigador de la maestría en hidrología de la UMSNH. Se midieron parámetros experimentales (sensores de color, turbidímetro, entre otros) en un laboratorio del posgrado de ingeniería civil y con ellos se entrenó un modelo Random Forest en Python. Los resultados se analizaron con diagramas de caja y bigotes, dispersión y correlación hechos con Matplotlib.',
      timeline: [
        ['Verano', 'Proyecto de investigación Programa Delfín', 'UMSNH, con asesor de la maestría en hidrología'],
        ['2026', 'Presentación en cartel', 'Congreso Internacional Delfín 2026 · UT Bahía de Banderas, Nayarit'],
        ['2026', 'Ponencia', '15º Encuentro de Jóvenes Investigadores del Estado de Michoacán'],
      ],
    },
    skills: {
      title: 'Habilidades',
      groups: { frontend: 'Frontend', backend: 'Backend', data: 'Datos y bases de datos', collab: 'Colaboración' },
    },
    contact: {
      title: 'Trabajemos juntos.',
      text: 'Busco prácticas y oportunidades de empleo. La forma más rápida de contactarme es por correo.',
      copy: 'Copiar correo',
      copied: '¡Copiado!',
    },
    footer: 'Diseñado y desarrollado por Israel Ramírez Morales',
  },
}
