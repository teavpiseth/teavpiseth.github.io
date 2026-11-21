import { Icon } from '../Icon'
import type { Course } from './courses'

const colors = {
  code: 'bg-amber-50 text-amber-800 ring-amber-200/65 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-300/15',
  react: 'bg-sky-50 text-sky-700 ring-sky-200/65 dark:bg-sky-400/10 dark:text-sky-300 dark:ring-sky-300/15',
  server: 'bg-emerald-50 text-emerald-700 ring-emerald-200/65 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-300/15',
}

export function CourseIcon({ course }: { course: Course }) {
  const icon = course.icon === 'react' || course.icon === 'server' ? course.icon : 'code'

  return (
    <span className={`grid size-13 shrink-0 place-items-center rounded-2xl ring-1 ring-inset sm:size-14 ${colors[icon]}`}>
      <Icon name={icon} className="size-6" />
    </span>
  )
}
