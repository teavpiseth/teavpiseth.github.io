import type { Language } from '../content'
import { Icon } from '../Icon'
import { CourseSection } from './CourseSection'
import { academyCopy } from './copy'
import type { Course, CourseModule } from './courses'

export function CourseRoadmap({ roadmap, modules, language }: {
  roadmap: Course['roadmap']
  modules: CourseModule[]
  language: Language
}) {
  const t = academyCopy[language]

  return (
    <CourseSection id="roadmap" title={t.sections.roadmap}>
      <div className="space-y-6">
        {roadmap.groups.map((group) => (
          <div key={group.title.en}>
            <h3 className="mb-3 flex items-center gap-3 text-base font-bold text-zinc-800 dark:text-zinc-200">
              {group.title[language]}
              <span aria-hidden="true" className="h-px flex-1 bg-zinc-200 dark:bg-white/10" />
            </h3>
            <ol className="grid items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.modules.map((module) => (
                <li key={module.id}>
                  <details className="group rounded-xl border border-zinc-200 bg-zinc-50/75 open:border-accent/35 dark:border-white/10 dark:bg-white/[0.025] dark:open:border-accent-dark/40">
                    <summary className="flex min-h-26 cursor-pointer list-none items-start justify-between gap-3 rounded-xl p-4 hover:bg-zinc-100/80 focus-visible:outline-2 focus-visible:outline-accent dark:hover:bg-white/5 dark:focus-visible:outline-accent-dark [&::-webkit-details-marker]:hidden">
                      <span>
                        <span className="mb-2 block text-sm font-semibold text-accent dark:text-accent-dark">
                          {t.module} {modules.indexOf(module) + 1}
                        </span>
                        <span className="block font-bold">{module.title[language]}</span>
                      </span>
                      <Icon name="chevron" className="mt-1 size-[18px] shrink-0 text-zinc-500 motion-safe:transition-transform group-open:rotate-180 dark:text-zinc-400" />
                    </summary>
                    <div className="border-t border-zinc-200 px-4 py-4 dark:border-white/10">
                      <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">{module.description[language]}</p>
                      {module.exampleUrl && (
                        <a href={module.exampleUrl} className="mt-3 inline-flex items-center gap-2 rounded text-sm font-semibold text-accent hover:underline dark:text-accent-dark">
                          <Icon name="code" className="size-4" />
                          {t.viewExample}
                        </a>
                      )}
                    </div>
                  </details>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </CourseSection>
  )
}
