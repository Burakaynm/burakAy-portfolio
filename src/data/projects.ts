import { profile } from "./profile";
import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Eclipse Combat Calculator",
    description:
      "A web-based combat simulation tool designed for Eclipse: Second Dawn for the Galaxy. The project calculates combat outcomes using custom dice logic, initiative phases, missile attacks, cannon rounds, and Monte Carlo simulations.",
    technologies: ["React", "TypeScript", "Vite", "Vercel"],
    liveUrl: "https://eclipse-combat-calculator.vercel.app/",
    githubUrl: profile.github + "/eclipse-combat-calculator",
  },
  {
    title: "Seesaw Simulation",
    description:
      "An interactive physics-based web simulation that visualizes balance behavior on a rotating seesaw. The project includes user interaction, object placement, coordinate transformation logic, and dynamic visual feedback.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    liveUrl: "https://burakaynm.github.io/seesaw-simulation/",
    githubUrl: "https://github.com/Burakaynm/seesaw-simulation",
  },
  {
    title: "Words of Wonders Game",
    description:
      "A browser-based word puzzle game inspired by Words of Wonders. The project was developed with Pixi.js and JavaScript, focusing on canvas-based rendering, interactive game mechanics, asset management, and animated user interactions.",
    technologies: ["JavaScript", "Pixi.js", "Webpack", "GSAP", "Vercel"],
    liveUrl: "https://wow-pixijs.vercel.app/",
    githubUrl: "https://github.com/Burakaynm/wow-pixijs",
  },
  {
    title: "To-Do Application",
    description:
      "A full-stack task management application developed with React, Node.js, Express.js, MongoDB, and JWT authentication. The project includes user authentication, CRUD operations, task filtering, pagination, and backend-integrated frontend workflows.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    githubUrl: "https://github.com/Burakaynm/todoapp-frontend",
  },
];
