export const seoConfig = {
  siteName: "DevPass",

  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  title: "DevPass | Tecnología, Desarrollo e Innovación",

  description:
    "DevPass: tecnología, desarrollo de software, inteligencia artificial, automatización, proyectos y soluciones digitales.",

  shortDescription:
    "Tecnología, desarrollo, inteligencia artificial y soluciones digitales.",

  locale: "es_PE",

  language: "es",

  author: {
    name: "DevPass",
    url:
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },

  logo: "/images/devpass-robot.png",

  defaultImage: "/images/devpass-robot.png",

  keywords: [
    "DevPass",
    "desarrollo de software",
    "desarrollo web",
    "software a medida",
    "inteligencia artificial",
    "automatización",
    "programación",
    "ingeniería de software",
    "soluciones digitales",
    "tecnología",
    "desarrollo tecnológico",
    "aplicaciones web",
    "sistemas",
    "IA",
  ],

  social: {
    tiktok: "https://www.tiktok.com/@devpass_oficial",

    youtube:
      "https://www.youtube.com/results?search_query=devpass_oficial",

    facebook:
      "https://www.facebook.com/profile.php?id=61580981483158",

    linkedin:
      "https://www.linkedin.com/company/devpass-oficial/?viewAsMember=true",

    github: "https://github.com/JAIMES4224D",
  },

  navigation: {
    home: "/",
    services: "/servicios",
    solutions: "/soluciones",
    projects: "/proyectos",
    cases: "/casos",
    blog: "/blog",
    notes: "/notes",
    videos: "/videos",
    lab: "/lab",
    about: "/sobre-mi",
    audit: "/auditoria",
    contact: "/contacto",
  },
} as const;

export type SeoConfig = typeof seoConfig;