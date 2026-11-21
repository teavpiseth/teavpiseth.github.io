import { Link } from 'react-router-dom'
import { PointerDots } from '../components/PointerDots'
import { academyContainer, container, primaryButton } from '../components/ui'
import { copy } from '../content'
import type { Language } from '../content'
import { Icon } from '../Icon'
import { CourseRoadmap } from './CourseRoadmap'
import { CourseSection } from './CourseSection'
import { CourseStudyPlan } from './CourseStudyPlan'
import { academyCopy, courseLevelText } from './copy'
import { academyPath } from './courses'
import type { Course, CourseCard, LocalizedText } from './courses'

const tile = 'rounded-xl border border-zinc-200 bg-zinc-50/75 dark:border-white/10 dark:bg-white/[0.025]'
const muted = 'text-base leading-relaxed text-zinc-600 dark:text-zinc-300'
const lightButton = 'inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#74192d] transition-colors hover:bg-red-50'

function CardGrid({ items, language, columns = 3 }: { items: CourseCard[]; language: Language; columns?: 2 | 3 }) {
  return (
    <ul className={`grid gap-3 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}>
      {items.map(({ title, description }) => (
        <li key={title.en} className={`flex items-start gap-3.5 p-4 sm:p-5 ${tile}`}>
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-red-100/75 text-accent dark:bg-accent/15 dark:text-accent-dark">
            <Icon name="check" className="size-4" />
          </span>
          <div className="min-w-0">
            <h3 className="leading-snug font-bold">{title[language]}</h3>
            <p className={`mt-1.5 ${muted}`}>{description[language]}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

function Tags({ items, language }: { items: LocalizedText[]; language: Language }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li key={item.en} className="rounded-lg border border-zinc-200 px-3.5 py-2 text-sm font-semibold text-zinc-700 dark:border-white/12 dark:bg-white/4 dark:text-zinc-200">
          {item[language]}
        </li>
      ))}
    </ul>
  )
}

export function CourseDetail({ course, language }: { course: Course; language: Language }) {
  const t = academyCopy[language]
  const { hero, objectives, format, techStack, workflow, approach, projects, outcomes, access, instructor, benefits, closing } = course
  const modules = course.roadmap.groups.flatMap((group) => group.modules)
  const facts = [
    { label: t.format, value: format.delivery[language] },
    { label: t.level, value: courseLevelText(course.level, language) },
    { label: t.modules, value: new Intl.NumberFormat(language).format(modules.length) },
    ...format.facts.map(({ label, value }) => ({ label: label[language], value: value[language] })),
  ]

  return (
    <article className={`${container} py-7 sm:py-10`}>
      <nav aria-label={t.breadcrumb} className="mb-5 flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-500 sm:mb-6 dark:text-zinc-400">
        <Link to="/" className="hover:text-accent dark:hover:text-accent-dark">{copy[language].nav.home}</Link>
        <span aria-hidden="true">/</span>
        <Link to={academyPath} className="hover:text-accent dark:hover:text-accent-dark">{copy[language].nav.academy}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="text-zinc-800 dark:text-zinc-200">{course.topic}</span>
      </nav>

      <header className="relative isolate overflow-hidden rounded-[1.5rem] border border-[#67172a] bg-linear-to-br from-[#82192f] via-[#a3213d] to-[#792039] px-6 py-9 text-white shadow-lg shadow-red-950/15 sm:px-9 sm:py-12 lg:px-12 lg:py-14 dark:border-rose-200/15 dark:from-[#4e1527] dark:via-[#711c32] dark:to-[#431622] dark:shadow-black/35">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[46%] bg-[radial-gradient(circle,rgba(255,255,255,0.42)_1px,transparent_1.3px)] bg-size-[20px_20px] opacity-30 mask-l-from-35% sm:block" />
        <PointerDots onBurgundy />
        <div aria-hidden="true" className="pointer-events-none absolute top-1/2 right-12 -z-10 hidden size-35 -translate-y-1/2 rotate-8 place-items-center rounded-3xl border border-white/20 bg-white/9 text-white/55 shadow-2xl shadow-red-950/25 backdrop-blur-xs lg:grid xl:right-15">
          <Icon name="code" className="size-16" />
        </div>
        <div className="max-w-3xl lg:pr-8">
          <p className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-black/16 px-3 py-1.5 text-sm font-semibold text-rose-50">
            <Icon name="book" className="size-4" />
            {hero.label[language]}
          </p>
          <h1 className={`mt-5 text-[clamp(2.2rem,4.3vw,3.85rem)] font-bold text-balance wrap-break-word ${language === 'en' ? 'leading-[1.07] tracking-[-0.05em]' : 'leading-[1.48]'}`}>
            {hero.title[language]}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-rose-50/95 sm:text-lg">{hero.description[language]}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#roadmap" className={lightButton}>{t.viewRoadmap}</a>
            <a href="#course-access" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/45 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/12">
              {t.sections.access}
            </a>
          </div>
        </div>
      </header>

      <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
        <CourseSection id="objectives" title={t.sections.objectives} description={objectives.description?.[language]}>
          <CardGrid items={objectives.items} language={language} />
        </CourseSection>

        <CourseSection id="course-format" title={t.sections.format}>
          <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {facts.map(({ label, value }) => (
              <div key={label} className={`flex min-w-0 flex-col-reverse justify-end gap-1.5 p-3.5 sm:p-5 ${tile}`}>
                <dt className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{label}</dt>
                <dd className="text-lg leading-snug font-bold wrap-break-word text-accent sm:text-xl dark:text-accent-dark">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5">
            <Tags items={format.highlights} language={language} />
          </div>
          <p className={`mt-5 ${muted}`}>
            <strong className="mr-2 text-zinc-900 dark:text-white">{t.prerequisites}</strong>
            {format.prerequisites[language]}
          </p>
        </CourseSection>

        <CourseSection id="tech-stack" title={t.sections.techStack}>
          <div className="space-y-5">
            {techStack.groups.map((group) => (
              <div key={group.title.en}>
                <h3 className="mb-3 font-bold">{group.title[language]}</h3>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => (
                    <li key={item.name} className={`flex items-center gap-3.5 p-4 ${tile}`}>
                      <span aria-hidden="true" className="grid h-9 min-w-10 shrink-0 place-items-center rounded-lg bg-red-100/75 px-2 font-mono text-xs font-bold text-accent dark:bg-accent/15 dark:text-accent-dark">
                        {item.mark}
                      </span>
                      <div className="min-w-0">
                        <p className="font-bold">{item.name}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.role[language]}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CourseSection>

        <CourseSection id="workflow" title={t.sections.workflow} description={workflow.description[language]}>
          <Tags items={workflow.tools} language={language} />
        </CourseSection>

        <CourseSection id="learning-approach" title={t.sections.approach} description={approach.description[language]}>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {approach.steps.map((step, index) => (
              <li key={step.en} className={`flex items-center gap-3 p-4 ${tile}`}>
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-red-100/75 text-sm font-bold tabular-nums text-accent dark:bg-accent/15 dark:text-accent-dark">{index + 1}</span>
                <span className="font-semibold">{step[language]}</span>
              </li>
            ))}
          </ol>
        </CourseSection>

        <CourseRoadmap roadmap={course.roadmap} modules={modules} language={language} />

        <CourseSection id="projects" title={t.sections.projects} description={projects.description?.[language]}>
          <CardGrid items={projects.items} language={language} columns={2} />
        </CourseSection>

        <CourseSection id="outcomes" title={t.sections.outcomes} description={outcomes.description?.[language]}>
          <CardGrid items={outcomes.items} language={language} />
          <p className="mt-5 rounded-xl border border-red-200/65 bg-red-50 p-4 font-semibold text-red-950 sm:px-5 dark:border-accent-dark/20 dark:bg-accent/10 dark:text-rose-100">
            {outcomes.summary[language]}
          </p>
        </CourseSection>

        <CourseSection id="course-access" title={t.sections.access}>
          <div className="grid items-center gap-5 rounded-xl border border-red-200/75 bg-red-50/70 p-5 sm:px-6 md:grid-cols-[1fr_auto] dark:border-accent-dark/25 dark:bg-accent/10">
            <div>
              <p className="text-3xl font-bold text-accent sm:text-4xl dark:text-accent-dark">{access.price[language]}</p>
              <p className={`mt-2 max-w-2xl ${muted}`}>{access.description[language]}</p>
            </div>
            <a href={access.action.href} className={`${primaryButton} w-fit`}><Icon name="book" className="size-[18px]" />{access.action.label[language]}</a>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {access.benefits.map((benefit) => (
              <li key={benefit.en} className="flex items-center gap-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200">
                <Icon name="check" className="size-[18px] shrink-0 text-accent dark:text-accent-dark" />
                {benefit[language]}
              </li>
            ))}
          </ul>
        </CourseSection>

        <CourseStudyPlan course={course} modules={modules} language={language} />

        <CourseSection id="instructor" title={t.sections.instructor}>
          <div className={`grid items-start gap-5 p-4 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-6 ${tile}`}>
            {instructor.image ? (
              <img src={instructor.image} alt="" loading="lazy" className="size-24 rounded-2xl object-cover ring-1 ring-zinc-200 sm:size-30 dark:ring-white/10" />
            ) : (
              <div aria-hidden="true" className="grid size-24 place-items-center rounded-2xl border border-rose-200/35 bg-linear-to-br from-[#6e172c] to-[#a32a46] text-3xl font-bold tracking-tight text-white sm:size-30">
                {instructor.initials}
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold">{instructor.name[language]}</h3>
              <p className="mt-1 text-sm font-semibold text-accent dark:text-accent-dark">{instructor.role[language]}</p>
              <p className={`mt-2 ${muted}`}>{instructor.description[language]}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {instructor.skills.map((skill) => (
                  <li key={skill} className="rounded-full bg-zinc-200/60 px-2.5 py-1 text-sm font-medium dark:bg-white/10">{skill}</li>
                ))}
              </ul>
              {instructor.profile && (
                <a href={instructor.profile.href} className="mt-4 inline-flex items-center gap-2 rounded text-sm font-semibold text-accent hover:underline dark:text-accent-dark">
                  <Icon name="globe" className="size-4" />{instructor.profile.label[language]}
                </a>
              )}
            </div>
          </div>
        </CourseSection>

        <CourseSection id="benefits" title={t.sections.benefits} description={benefits.description?.[language]}>
          <CardGrid items={benefits.items} language={language} />
        </CourseSection>

        <section aria-labelledby="closing-title" className="relative isolate flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl border border-white/8 bg-[#19151b] p-5 text-white sm:p-7 lg:flex-row lg:items-center lg:p-8">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(216,40,54,0.31),transparent_65%)]" />
          <div>
            <h2 id="closing-title" className="text-xl font-bold text-balance sm:text-2xl">{closing.title[language]}</h2>
            <p className="mt-2 text-base leading-relaxed text-zinc-300">{closing.description[language]}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <a href="#roadmap" className={primaryButton}>{t.start}</a>
            <Link to={academyPath} className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10">
              {t.back}
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}

export function MissingPage({ language }: { language: Language }) {
  const t = academyCopy[language]

  return (
    <section className={`${academyContainer} py-16 sm:py-24`}>
      <h1 className="text-3xl font-bold sm:text-4xl">{t.missingTitle}</h1>
      <p className="mt-3 text-base text-zinc-600 dark:text-zinc-300">{t.missingDescription}</p>
      <Link to={academyPath} className={`${primaryButton} mt-6`}>{t.back}</Link>
    </section>
  )
}
