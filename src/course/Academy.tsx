import { Link } from 'react-router-dom'
import workspaceImage from '../assets/workspace.jpg'
import { PointerDots } from '../components/PointerDots'
import { academyContainer } from '../components/ui'
import { copy } from '../content'
import type { Language } from '../content'
import { Icon } from '../Icon'
import { CourseIcon } from './CourseIcon'
import { academyCopy, courseLevelText } from './copy'
import { coursePath, courses } from './courses'

export function Academy({ language }: { language: Language }) {
  const t = academyCopy[language]

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-zinc-200/75 bg-[radial-gradient(ellipse_at_top_right,#fbe8ea,white_64%)] dark:border-white/8 dark:bg-[radial-gradient(ellipse_at_top_right,#292025,#151517_62%)]">
        <PointerDots />
        <div className={`${academyContainer} py-9 sm:py-12`}>
          <nav aria-label={t.breadcrumb} className="mb-6 flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <Link to="/" className="hover:text-accent dark:hover:text-accent-dark">{copy[language].nav.home}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-zinc-800 dark:text-zinc-200">{copy[language].nav.academy}</span>
          </nav>
          <div className="grid items-center gap-8 md:grid-cols-[1fr_0.62fr]">
            <div>
              <h1 className={`text-4xl font-bold text-balance sm:text-5xl ${language === 'en' ? 'tracking-[-0.055em]' : 'leading-[1.48]'}`}>
                {t.title}
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">{t.description}</p>
            </div>
            <div className="hidden rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-lg shadow-zinc-950/8 md:block dark:border-white/12 dark:bg-white/5 dark:shadow-black/25">
              <img
                src={workspaceImage}
                alt={copy[language].heroImage}
                width={1400}
                height={933}
                className="aspect-[2.2] w-full rounded-xl object-cover object-[center_43%]"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="catalog-title" className={`${academyContainer} py-9 sm:py-12`}>
        <h2 id="catalog-title" className="mb-5 text-2xl font-bold sm:text-3xl">{t.catalog}</h2>
        <ul className="grid gap-3.5">
          {courses.map((course) => (
            <li key={course.id}>
              <Link
                to={coursePath(course.id)}
                className="group grid gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-xs transition-colors hover:border-accent/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-5 sm:p-5 dark:border-white/10 dark:bg-[#19191c] dark:hover:border-accent-dark/55 dark:focus-visible:outline-accent-dark"
              >
                <CourseIcon course={course} />
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="text-lg font-bold">{course.hero.title[language]}</h3>
                    <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:bg-white/8 dark:text-zinc-200">{courseLevelText(course.level, language)}</span>
                  </div>
                  <p className="mt-1.5 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">{course.hero.description[language]}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                    <Icon name="clock" className="size-4" />
                    {course.format.delivery[language]}
                  </span>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-accent group-hover:bg-red-100 dark:bg-accent/10 dark:text-accent-dark dark:group-hover:bg-accent/18">
                  {t.viewCourse}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
