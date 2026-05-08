import { useState } from "react";
import { profile } from "../../data/profile";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPhotoOpen(true)}
              className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/10 bg-slate-900 shadow-lg shadow-blue-500/10 transition hover:scale-105 hover:border-blue-400/40"
              aria-label="Open profile photo"
            >
              <img
                src="/profile-photo.png"
                alt={`${profile.name} profile photo`}
                className="h-full w-full object-cover object-center"
              />
            </button>

            <a
              href="#"
              className="text-sm font-semibold tracking-wide text-white transition hover:text-blue-300"
            >
              {profile.name}
            </a>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {isPhotoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 px-6 backdrop-blur-xl"
          onClick={() => setIsPhotoOpen(false)}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_34rem)]" />

          <div
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-2xl shadow-blue-950/40"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

            <button
              type="button"
              onClick={() => setIsPhotoOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-sm text-slate-300 backdrop-blur transition hover:bg-white/10 hover:text-white"
              aria-label="Close profile photo"
            >
              ✕
            </button>

            <div className="relative px-8 pt-10">
              <div className="mx-auto flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-cyan-500/20 p-2 shadow-2xl shadow-blue-500/10">
                <div className="h-full w-full overflow-hidden rounded-full border border-white/10 bg-slate-900">
                  <img
                    src="/profile-photo.png"
                    alt={`${profile.name} profile photo`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="mt-7 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  {profile.name}
                </h2>

                <p className="mt-2 text-sm font-medium text-blue-200">
                  {profile.title}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  {profile.location}
                </p>
              </div>
            </div>

            <div className="relative mt-8 border-t border-white/10 bg-white/[0.03] px-8 py-6">
              <p className="text-center text-sm leading-6 text-slate-400">
                Full stack developer focused on building clean, maintainable,
                and scalable web applications.
              </p>

              <div className="mt-5 flex justify-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
