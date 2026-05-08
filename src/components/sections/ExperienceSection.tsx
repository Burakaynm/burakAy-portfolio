import { experiences } from "../../data/experience";
import { Badge } from "../ui/Badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
          Experience
        </p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Professional background and development experience.
        </h2>

        <p className="mt-4 leading-7 text-slate-400">
          My experience focuses on building maintainable web applications,
          integrating frontend modules with backend services, and improving
          business-oriented software workflows.
        </p>
      </div>

      <div className="relative space-y-6">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-blue-400/50 via-slate-700 to-transparent md:block" />

        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.08] md:ml-16"
          >
            <div className="absolute -left-[3.25rem] top-7 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-blue-400 shadow-lg shadow-blue-400/30 md:block" />

            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {experience.role}
                </h3>

                <p className="mt-1 text-sm font-medium text-blue-200">
                  {experience.company}
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-sm text-slate-300">{experience.period}</p>
                <p className="mt-1 text-sm text-slate-500">
                  {experience.location}
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400">
              {experience.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <Badge key={technology} label={technology} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}