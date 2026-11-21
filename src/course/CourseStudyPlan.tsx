import { useEffect, useState } from 'react'
import type { Language } from '../content'
import { CourseSection } from './CourseSection'
import { academyCopy } from './copy'
import type { Course, CourseModule } from './courses'

function readProgress(key: string): string[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(key) ?? '[]')
    return Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : []
  } catch {
    return []
  }
}

export function CourseStudyPlan({ course, modules, language }: {
  course: Course
  modules: CourseModule[]
  language: Language
}) {
  const t = academyCopy[language]
  const storageKey = `teavpiseth-course-progress-${course.id}`
  const [completed, setCompleted] = useState(() => readProgress(storageKey))
  const done = modules.filter(({ id }) => completed.includes(id)).length
  const progress = modules.length ? done / modules.length : 0

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(completed))
    } catch {
      // Progress remains available for this visit when storage is unavailable.
    }
  }, [completed, storageKey])

  return (
    <CourseSection id="study-plan" title={t.sections.studyPlan} description={course.studyPlan.description[language]}>
      {course.studyPlan.schedule?.length ? (
        <dl className="mb-5 flex flex-wrap gap-3">
          {course.studyPlan.schedule.map(({ label, value }) => (
            <div key={label.en} className="rounded-xl bg-zinc-100 px-4 py-2.5 dark:bg-white/6">
              <dt className="text-sm text-zinc-600 dark:text-zinc-400">{label[language]}</dt>
              <dd className="mt-1 font-semibold">{value[language]}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <div className="rounded-xl border border-zinc-200 bg-zinc-50/75 p-4 sm:p-6 dark:border-white/10 dark:bg-white/[0.025]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p id="course-progress-label" className="text-lg font-semibold">{t.progress}</p>
          <span className="text-3xl font-bold tabular-nums text-accent dark:text-accent-dark">
            {new Intl.NumberFormat(language, { style: 'percent' }).format(progress)}
          </span>
        </div>
        <progress
          aria-labelledby="course-progress-label"
          max={modules.length || 1}
          value={done}
          className="mt-4 block h-2.5 w-full appearance-none overflow-hidden rounded-full bg-zinc-200 text-accent dark:bg-white/10 dark:text-accent-dark [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-current [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-current"
        />
        <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-zinc-600 dark:text-zinc-300">
          <div className="flex gap-1.5"><dt>{t.completed}</dt><dd className="font-semibold tabular-nums">{done}</dd></div>
          <div className="flex gap-1.5"><dt>{t.remaining}</dt><dd className="font-semibold tabular-nums">{modules.length - done}</dd></div>
        </dl>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <li key={module.id}>
              <label className="flex h-full cursor-pointer items-start gap-2.5 rounded-lg border border-zinc-200 bg-white px-3 py-3 text-sm leading-relaxed font-medium text-zinc-800 has-checked:border-accent/40 has-checked:bg-red-50 dark:border-white/10 dark:bg-[#18181b] dark:text-zinc-100 dark:has-checked:border-accent-dark/45 dark:has-checked:bg-accent/10">
                <input
                  type="checkbox"
                  checked={completed.includes(module.id)}
                  onChange={(event) => {
                    const checked = event.currentTarget.checked
                    setCompleted((previous) => checked ? [...previous, module.id] : previous.filter((id) => id !== module.id))
                  }}
                  className="mt-0.5 size-4 shrink-0 accent-accent"
                />
                {module.title[language]}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </CourseSection>
  )
}
