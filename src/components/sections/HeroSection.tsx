import { profile } from "../../data/profile";
import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[86vh] max-w-6xl items-center px-6 py-20">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for software development opportunities
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-300">
            Full Stack Developer
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
            Building clean and scalable web applications.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Hi, I’m {profile.name}. I develop modern, maintainable, and
            user-focused applications across frontend and backend technologies
            with a strong focus on clean architecture and practical software
            solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">View Projects</Button>

            <Button href={profile.cvUrl} variant="secondary">
              Download CV
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="space-y-4 font-mono text-sm">
              <p>
                <span className="text-violet-300">const</span>{" "}
                <span className="text-blue-300">developer</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-emerald-300">"{profile.name}"</span>
              </p>

              <p>
                <span className="text-violet-300">const</span>{" "}
                <span className="text-blue-300">focus</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-emerald-300">
                  "Full Stack Development"
                </span>
              </p>

              <p>
                <span className="text-violet-300">const</span>{" "}
                <span className="text-blue-300">principles</span>{" "}
                <span className="text-slate-400">=</span>{" "}
                <span className="text-slate-300">[</span>
              </p>

              <div className="ml-6 space-y-2 text-emerald-300">
                <p>"Clean Code",</p>
                <p>"Maintainability",</p>
                <p>"Scalability",</p>
                <p>"User-Focused Design"</p>
              </div>

              <p className="text-slate-300">]</p>

              <p>
                <span className="text-blue-300">portfolio</span>
                <span className="text-slate-300">.</span>
                <span className="text-blue-300">build</span>
                <span className="text-slate-300">()</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
