import type { MetadataRoute } from "next";

import { seoConfig } from "@/lib/seo/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ─────────────────────────────────────────────
    // PRINCIPALES
    // ─────────────────────────────────────────────
    {
      url: `${seoConfig.siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${seoConfig.siteUrl}/sobre-mi`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${seoConfig.siteUrl}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─────────────────────────────────────────────
    // SERVICIOS
    // ─────────────────────────────────────────────
    {
      url: `${seoConfig.siteUrl}/servicios`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${seoConfig.siteUrl}/servicios/desarrollo-web`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${seoConfig.siteUrl}/servicios/software`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${seoConfig.siteUrl}/servicios/automatizacion`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─────────────────────────────────────────────
    // SOLUCIONES
    // ─────────────────────────────────────────────
    {
      url: `${seoConfig.siteUrl}/soluciones`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${seoConfig.siteUrl}/soluciones/ia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${seoConfig.siteUrl}/soluciones/transformacion-digital`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${seoConfig.siteUrl}/soluciones/integraciones`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─────────────────────────────────────────────
    // PROYECTOS
    // ─────────────────────────────────────────────
    {
      url: `${seoConfig.siteUrl}/proyectos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${seoConfig.siteUrl}/proyectos/sigesapol`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/proyectos/codex-alimentarius`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/proyectos/mantenimiento`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/proyectos/telemedicina`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/proyectos/generate-sql`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/proyectos/sistema-garage`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/proyectos/convertidor`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/proyectos/recomendacion-peliculas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/proyectos/qr-master`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/proyectos/tienda-donglai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ─────────────────────────────────────────────
    // CASOS
    // ─────────────────────────────────────────────
    {
      url: `${seoConfig.siteUrl}/casos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─────────────────────────────────────────────
    // BLOG
    // ─────────────────────────────────────────────
    {
      url: `${seoConfig.siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${seoConfig.siteUrl}/blog/testing-con-ia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${seoConfig.siteUrl}/blog/software`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${seoConfig.siteUrl}/blog/inteligencia-artificial`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${seoConfig.siteUrl}/blog/elegir-distribucion-linux`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─────────────────────────────────────────────
    // NOTES
    // ─────────────────────────────────────────────
    {
      url: `${seoConfig.siteUrl}/notes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: `${seoConfig.siteUrl}/notes/linux-comandos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/notes/buenas-practicas-software`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/notes/agentes-inteligencia-artificial`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/notes/tf-idf-similitud-coseno`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/notes/diagnostico-redes-linux`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/notes/seguridad-web`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/notes/herramientas-stack`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/notes/arquitectura-antes-codigo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${seoConfig.siteUrl}/notes/git-flujo-trabajo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ─────────────────────────────────────────────
    // VIDEOS
    // ─────────────────────────────────────────────
    {
      url: `${seoConfig.siteUrl}/videos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // ─────────────────────────────────────────────
    // LAB
    // ─────────────────────────────────────────────
    {
      url: `${seoConfig.siteUrl}/lab`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ─────────────────────────────────────────────
    // AUDITORÍA
    // ─────────────────────────────────────────────
    {
      url: `${seoConfig.siteUrl}/auditoria`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}