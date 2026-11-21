import type { ReactNode } from 'react'

export function CourseSection({ id, title, description, children }: {
  id: string
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-xs sm:p-7 lg:p-8 dark:border-white/10 dark:bg-[#18181b]"
    >
      <h2 id={`${id}-title`} className="flex items-center gap-3 text-xl leading-snug font-bold text-balance sm:text-2xl">
        <span aria-hidden="true" className="h-5 w-[3px] shrink-0 rounded-full bg-accent dark:bg-accent-dark" />
        {title}
      </h2>
      {description && <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">{description}</p>}
      <div className="mt-5 sm:mt-6">{children}</div>
    </section>
  )
}
