import { seoConfig } from "./config";

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: seoConfig.siteName,

    url: seoConfig.siteUrl,

    logo: `${seoConfig.siteUrl}${seoConfig.logo}`,

    description: seoConfig.description,

    sameAs: [
      seoConfig.social.tiktok,
      seoConfig.social.youtube,
      seoConfig.social.facebook,
      seoConfig.social.linkedin,
      seoConfig.social.github,
    ],
  };
}

export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: seoConfig.siteName,

    url: seoConfig.siteUrl,

    description: seoConfig.description,

    inLanguage: seoConfig.language,

    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },
  };
}

export function createWebPageSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const url = `${seoConfig.siteUrl}${
    path.startsWith("/") ? path : `/${path}`
  }`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",

    name,

    description,

    url,

    isPartOf: {
      "@type": "WebSite",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },

    inLanguage: seoConfig.language,
  };
}

export function createBreadcrumbSchema(
  items: Array<{
    name: string;
    path: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: `${seoConfig.siteUrl}${
        item.path.startsWith("/") ? item.path : `/${item.path}`
      }`,
    })),
  };
}

export function createArticleSchema({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
}) {
  const url = `${seoConfig.siteUrl}${
    path.startsWith("/") ? path : `/${path}`
  }`;

  const imageUrl = image.startsWith("http")
    ? image
    : `${seoConfig.siteUrl}${image.startsWith("/") ? image : `/${image}`}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: title,

    description,

    url,

    image: [imageUrl],

    datePublished,

    ...(dateModified && {
      dateModified,
    }),

    author: {
      "@type": "Organization",
      name: seoConfig.author.name,
      url: seoConfig.author.url,
    },

    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${seoConfig.siteUrl}${seoConfig.logo}`,
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },

    inLanguage: seoConfig.language,
  };
}

export function createServiceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const url = `${seoConfig.siteUrl}${
    path.startsWith("/") ? path : `/${path}`
  }`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",

    name,

    description,

    url,

    provider: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },

    areaServed: {
      "@type": "Country",
      name: "Peru",
    },
  };
}

export function createSoftwareApplicationSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const url = `${seoConfig.siteUrl}${
    path.startsWith("/") ? path : `/${path}`
  }`;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",

    name,

    description,

    url,

    applicationCategory: "DeveloperApplication",

    operatingSystem: "Web",

    creator: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },
  };
}