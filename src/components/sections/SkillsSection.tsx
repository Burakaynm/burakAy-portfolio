import { skills } from "../../data/skills";
import { Badge } from "../ui/Badge";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl font-bold text-white">Skills</h2>

        <p className="mt-4 leading-7 text-slate-400">
          Technologies and tools I use while building frontend, backend and full
          stack applications.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <h3 className="text-lg font-semibold text-white">
              {category.title}
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
