import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Git: Flujo de Trabajo que Utilizo | DevPass",
  description:
    "Apuntes sobre el flujo de trabajo con Git: ramas, commits, pruebas, push, pull requests, repositorios remotos y buenas prácticas para mantener un historial claro.",
  path: "/notes/git-flujo-trabajo",
  keywords: [
    "Git",
    "flujo de trabajo Git",
    "Git workflow",
    "Git workflow para desarrolladores",
    "Git buenas prácticas",
    "buenas prácticas Git",
    "control de versiones",
    "control de versiones Git",
    "Git para desarrolladores",
    "GitHub",
    "repositorio Git",
    "repositorio remoto",
    "repositorio local",
    "ramas Git",
    "branches Git",
    "git branch",
    "git switch",
    "git switch -c",
    "Git commits",
    "commits Git",
    "buenos commits",
    "mensajes de commit",
    "Conventional Commits",
    "Pull Request",
    "Pull Requests",
    "Git push",
    "Git pull",
    "git status",
    "git diff",
    "git log",
    "flujo de trabajo de desarrollo",
    "desarrollo de software",
    "ingeniería de software",
    "GitHub workflow",
    "versionado de software",
    "DevPass",
  ],
});

export default function GitFlujoTrabajoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}