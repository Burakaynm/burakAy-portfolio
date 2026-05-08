import type { Project } from "../../types";
import { Badge } from "./Badge";
import { Button } from "./Button";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Badge key={technology} label={technology} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.liveUrl && <Button href={project.liveUrl}>Live Demo</Button>}

        {project.githubUrl && (
          <Button href={project.githubUrl} variant="secondary">
            GitHub
          </Button>
        )}
      </div>
    </article>
  );
}
