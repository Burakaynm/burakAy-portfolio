import { projects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-bold text-white">Projects</h2>

        <p className="mt-4 leading-7 text-slate-400">
          Selected projects that demonstrate my technical skills, problem-solving
          approach, and interest in building practical software products.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}