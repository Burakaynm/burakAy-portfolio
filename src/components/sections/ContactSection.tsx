import { profile } from "../../data/profile";
import { Button } from "../ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 md:p-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-white">Contact</h2>

          <p className="mt-4 leading-7 text-slate-400">
            I am open to full stack, frontend and backend development
            opportunities. You can reach me through email, LinkedIn, or GitHub.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={`mailto:${profile.email}`}>Email Me</Button>

            <Button href={profile.linkedin} variant="secondary">
              LinkedIn
            </Button>

            <Button href={profile.github} variant="secondary">
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
