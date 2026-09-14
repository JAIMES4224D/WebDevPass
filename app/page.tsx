import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";

import Services from "@/components/Services";

import Footer from "@/components/Footer";

import Projects from "@/components/Projects";

import Articles from "@/components/Articles";

import Lab from "@/components/Lab";

import About from "@/components/About";

import Contacto from "@/components/Contacto";

import JsonLd from "@/components/seo/JsonLd";

import {
  createWebPageSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

export default function Home() {
  const webPageSchema = createWebPageSchema({
    name: "DevPass | Tecnología, Desarrollo e Innovación",
    description:
      "DevPass: tecnología, desarrollo de software, inteligencia artificial, automatización, proyectos y soluciones digitales.",
    path: "/",
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    {
      name: "Inicio",
      path: "/",
    },
  ]);

  return (
    <>
      <JsonLd
        data={[webPageSchema, breadcrumbSchema]}
      />

      <Navbar />

      <main>
        <Hero />

        <Services />

        <Projects />

        <Articles />

        <Lab />

        <About />

        <Contacto />
      </main>

      <Footer />
    </>
  );
}