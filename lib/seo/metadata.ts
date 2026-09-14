import type { Metadata } from "next";
import { seoConfig } from "./config";

type MetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

function absoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }

  return `${seoConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

function getImageUrl(image: string): string {
  return absoluteUrl(image);
}

export function createMetadata({
  title,
  description = seoConfig.description,
  path = "/",
  keywords = [],
  image = seoConfig.defaultImage,
  noIndex = false,
}: MetadataOptions): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = getImageUrl(image);

  const fullTitle =
    title === seoConfig.siteName
      ? title
      : `${title} | ${seoConfig.siteName}`;

  const combinedKeywords = [
    ...seoConfig.keywords,
    ...keywords,
  ];

  return {
    title: fullTitle,

    description,

    keywords: combinedKeywords,

    authors: [
      {
        name: seoConfig.author.name,
        url: seoConfig.author.url,
      },
    ],

    creator: seoConfig.author.name,

    metadataBase: new URL(seoConfig.siteUrl),

    alternates: {
      canonical: canonicalUrl,
    },

    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
          },
        },

    openGraph: {
      type: "website",
      locale: seoConfig.locale,
      url: canonicalUrl,
      siteName: seoConfig.siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          alt: fullTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}

export function createArticleMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
}: MetadataOptions): Metadata {
  const metadata = createMetadata({
    title,
    description,
    path,
    keywords,
    image,
  });

  return {
    ...metadata,

    openGraph: {
      ...metadata.openGraph,
      type: "article",
    },
  };
}

export function createServiceMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
}: MetadataOptions): Metadata {
  return createMetadata({
    title,
    description,
    path,
    keywords: [
      "servicios tecnológicos",
      "desarrollo de software",
      "soluciones digitales",
      ...keywords,
    ],
    image,
  });
}

export function createProjectMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
}: MetadataOptions): Metadata {
  return createMetadata({
    title,
    description,
    path,
    keywords: [
      "proyectos de software",
      "proyectos tecnológicos",
      "desarrollo de sistemas",
      ...keywords,
    ],
    image,
  });
}