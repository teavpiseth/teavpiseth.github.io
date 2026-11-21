import { Link } from 'react-router-dom'
import workspaceImage from './assets/workspace.jpg'
import { PointerDots } from './components/PointerDots'
import { container, primaryButton, secondaryButton } from './components/ui'
import { copy, notes, projects } from './content'
import type { Language } from './content'
import { academyCopy } from './course/copy'
import { academyPath } from './course/courses'
import { Icon } from './Icon'

const technologies = [
  { name: 'React', icon: 'react', color: 'text-sky-600 dark:text-sky-400' },
  { name: 'Next.js', icon: 'next', color: 'text-zinc-900 dark:text-zinc-100' },
  { name: 'TypeScript', icon: 'typescript', color: 'text-blue-600 dark:text-blue-400' },
  { name: 'Tailwind CSS', icon: 'tailwind', color: 'text-cyan-600 dark:text-cyan-400' },
  { name: 'Vite', icon: 'vite', color: 'text-violet-600 dark:text-violet-400' },
  { name: 'GitHub', icon: 'github', color: 'text-zinc-700 dark:text-zinc-200' },
  { name: 'Node.js', icon: 'server', color: 'text-green-700 dark:text-green-400' },
  { name: 'Express.js', icon: 'terminal', color: 'text-zinc-700 dark:text-zinc-200' },
  { name: 'Java', icon: 'coffee', color: 'text-orange-700 dark:text-orange-400' },
  { name: 'Spring Boot', icon: 'leaf', color: 'text-lime-700 dark:text-lime-400' },
  { name: 'MySQL', icon: 'database', color: 'text-amber-700 dark:text-amber-400' },
  { name: 'PostgreSQL', icon: 'database', color: 'text-blue-700 dark:text-blue-400' },
] as const

export function Home({ language }: { language: Language }) {
  const t = copy[language]

  return (
    <>
      <section id="home" className="relative isolate scroll-mt-20 overflow-hidden border-b border-zinc-200/80 bg-white dark:border-white/8 dark:bg-[#151517]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(216,40,54,0.075),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(216,40,54,0.12),transparent_57%)]" />
        <PointerDots />
        <div className={`${container} grid items-center gap-9 py-13 sm:py-17 lg:grid-cols-[1.06fr_1fr] lg:gap-11 lg:py-21`}>
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1.5 text-sm font-semibold text-accent dark:border-red-400/20 dark:bg-accent/10 dark:text-accent-dark">
              <Icon name="code" className="size-4" />
              {t.intro}
            </p>
            <h1 className={`font-bold ${language === 'en' ? 'text-[clamp(2.4rem,4.25vw,3.55rem)] leading-[1.07] tracking-[-0.064em]' : 'text-[clamp(2rem,3.6vw,3.15rem)] leading-[1.55]'}`}>
              <span className="block">{t.headline[0]}</span>
              <span className="block text-accent dark:text-accent-dark">{t.headline[1]}</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">{t.heroDescription}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/#projects" className={primaryButton}>{t.explore}</Link>
              <Link to={academyPath} className={secondaryButton}>{academyCopy[language].back}</Link>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-zinc-200/80 bg-white p-2 shadow-[0_20px_60px_-30px_rgba(65,20,20,0.48)] dark:border-white/12 dark:bg-white/5 dark:shadow-black/50">
            <img
              src={workspaceImage}
              alt={t.heroImage}
              width={1400}
              height={933}
              fetchPriority="high"
              className="aspect-[1.65] w-full rounded-[1.06rem] bg-zinc-900 object-cover object-[center_43%]"
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="technologies-title" className="border-b border-zinc-200/80 bg-white dark:border-white/8 dark:bg-[#151517]">
        <div className={`${container} py-6`}>
          <h2 id="technologies-title" className="mb-4 text-lg font-bold">{t.technologiesTitle}</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3.5 sm:grid-cols-3 lg:grid-cols-6">
            {technologies.map((item) => (
              <li key={item.name} className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                <Icon name={item.icon} className={`size-5 shrink-0 ${item.color}`} />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={`${container} space-y-14 py-12 sm:space-y-17 sm:py-15`}>
        <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24">
          <h2 id="projects-title" className="mb-5 text-2xl font-bold sm:text-3xl">{t.projectsTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const details = t.projectDetails[project.repository]
              return (
                <article key={project.repository} className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs sm:p-6 dark:border-white/10 dark:bg-[#19191c]">
                  <span className="mb-4 grid size-11 place-items-center rounded-xl bg-red-50 text-accent dark:bg-accent/12 dark:text-accent-dark">
                    <Icon name={project.icon} className="size-[22px]" />
                  </span>
                  <h3 className="text-lg font-bold">{details.title}</h3>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">{details.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((technology) => (
                      <li key={technology} className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-white/8 dark:text-zinc-200">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </section>

        <section id="notes" aria-labelledby="notes-title" className="scroll-mt-24">
          <h2 id="notes-title" className="mb-5 text-2xl font-bold sm:text-3xl">{t.notesTitle}</h2>
          <div className="grid items-start gap-3">
            {notes.map((note) => {
              const details = t.noteDetails[note.id]
              return (
                <details key={note.id} className="group rounded-2xl border border-zinc-200 bg-white shadow-xs open:border-accent/35 dark:border-white/10 dark:bg-[#19191c] dark:open:border-accent-dark/40">
                  <summary className="flex cursor-pointer list-none items-center gap-4 rounded-2xl p-4 hover:bg-zinc-50 sm:px-5 dark:hover:bg-white/4 [&::-webkit-details-marker]:hidden">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-white/8 dark:text-zinc-200">
                      <Icon name={note.icon} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold text-accent dark:text-accent-dark">{note.topic}</span>
                      <span className="mt-0.5 block text-base font-bold">{details.title}</span>
                      <span className="mt-0.5 block text-sm text-zinc-600 dark:text-zinc-300">{details.description}</span>
                    </span>
                    <Icon name="chevron" className="size-5 shrink-0 text-zinc-500 motion-safe:transition-transform group-open:rotate-180 dark:text-zinc-400" />
                  </summary>
                  <p className="max-w-3xl px-4 pb-5 text-base leading-relaxed text-zinc-700 sm:pr-8 sm:pl-19 dark:text-zinc-200">{details.body}</p>
                </details>
              )
            })}
          </div>
        </section>

        <section id="about" aria-labelledby="about-title" className="relative isolate scroll-mt-24 overflow-hidden rounded-[1.5rem] bg-zinc-950 px-6 py-8 text-white sm:px-9 sm:py-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(216,40,54,0.3),transparent_65%)]" />
          <div className="max-w-xl">
            <h2 id="about-title" className="text-2xl font-bold sm:text-3xl">{t.aboutTitle}</h2>
            <p className="mt-2 text-base leading-relaxed text-zinc-300">{t.aboutDescription}</p>
          </div>
        </section>
      </div>
    </>
  )
}
