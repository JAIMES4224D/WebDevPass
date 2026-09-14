import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "TF-IDF y Similitud Coseno | DevPass",
  description:
    "Apuntes sobre TF-IDF y similitud coseno: cómo transformar texto en vectores, medir la importancia de los términos y comparar documentos mediante representaciones numéricas.",
  path: "/notes/tf-idf-similitud-coseno",
  keywords: [
    "TF-IDF",
    "TF IDF",
    "Term Frequency Inverse Document Frequency",
    "similitud coseno",
    "cosine similarity",
    "TF-IDF y similitud coseno",
    "vectorización de texto",
    "representación de texto",
    "procesamiento de lenguaje natural",
    "NLP",
    "machine learning",
    "ciencia de datos",
    "data science",
    "vectores de texto",
    "similitud de documentos",
    "comparación de documentos",
    "análisis de texto",
    "clasificación de texto",
    "sistemas de recomendación",
    "búsqueda de documentos",
    "recomendación basada en contenido",
    "content-based recommendation",
    "sistemas de recomendación de películas",
    "DevPass",
  ],
});

export default function TfIdfSimilitudCosenoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}