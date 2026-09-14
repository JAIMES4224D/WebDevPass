import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Algoritmo de Recomendación de Películas | Machine Learning con Python",
  description:
    "Algoritmo de recomendación de películas desarrollado con Python, Pandas y Scikit-learn mediante Content-Based Filtering, TF-IDF y Cosine Similarity para encontrar películas relacionadas.",
  path: "/proyectos/recomendacion-de-peliculas",
  keywords: [
    "algoritmo de recomendación de películas",
    "sistema de recomendación de películas",
    "recomendador de películas",
    "movie recommendation system",
    "machine learning",
    "machine learning con Python",
    "data science",
    "NLP",
    "procesamiento de lenguaje natural",
    "Content-Based Filtering",
    "content based recommendation",
    "TF-IDF",
    "Cosine Similarity",
    "similitud del coseno",
    "feature engineering",
    "Metadata Soup",
    "data wrangling",
    "cold start",
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Joblib",
    "FastAPI",
    "AWS EC2",
    "recomendaciones de películas",
    "proyecto de inteligencia artificial",
    "proyecto de machine learning",
    "algoritmo de recomendación",
  ],
});

export default function RecomendacionPeliculasLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}