import type { ReactNode } from 'react'

const icons = {
  code: <><path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 4l-4 16" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5" /></>,
  terminal: <><path d="m5 7 5 5-5 5m8 0h6" /></>,
  next: <><circle cx="12" cy="12" r="9" /><path d="M8.5 15.5v-7l9.8 9.8M15.5 8.5V13" /></>,
  coffee: <><path d="M4 9h13v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm13 1h2a2 2 0 0 1 0 4h-2M3 21h16M8 3v3m5-3v3" /></>,
  leaf: <><path d="M20.5 3.5c0 8-1.5 14-9 14a6 6 0 0 1-6-6c0-6 6-7.5 15-8Z" /><path d="m3.5 20.5 11-11" /></>,
  database: <><ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" /></>,
  book: <><path d="M12 6a5 5 0 0 0-4-2H3v14h5a5 5 0 0 1 4 2 5 5 0 0 1 4-2h5V4h-5a5 5 0 0 0-4 2Zm0 0v14" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  server: <><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01M7 16.5h.01M11 7.5h6m-6 9h6" /></>,
  language: <><path d="m3 5 11 0M8.5 3v2m3 0c0 5-3 8-7 10m1-7c1.7 3.1 3.6 5 6 6m1 6 4-9 4 9m-6.5-3h5" /></>,
  moon: <path d="M20.9 13.2A8.9 8.9 0 0 1 10.8 3.1a9 9 0 1 0 10.1 10.1Z" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  github: <path fill="currentColor" stroke="none" d="M12 .75A11.25 11.25 0 0 0 8.44 22.67c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.61 2.5 3.27 1.28.1-.73.39-1.23.71-1.51-2.5-.29-5.12-1.25-5.12-5.56 0-1.23.44-2.24 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.31 3.09 1.15a10.7 10.7 0 0 1 5.63 0c2.14-1.46 3.08-1.15 3.08-1.15.62 1.55.24 2.69.12 2.98.72.78 1.15 1.79 1.15 3.02 0 4.32-2.62 5.27-5.12 5.55.4.35.76 1.03.76 2.08v2.77c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />,
  react: <><circle cx="12" cy="12" r="1.65" fill="currentColor" stroke="none" /><g strokeWidth="1.1"><ellipse cx="12" cy="12" rx="10.6" ry="4.1" /><ellipse cx="12" cy="12" rx="10.6" ry="4.1" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10.6" ry="4.1" transform="rotate(120 12 12)" /></g></>,
  typescript: <><rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" stroke="none" /><path d="M6 11.5h6m-3 0V18m9.5-6c-2-1.5-4-.8-4 1 0 2 4 1.2 4 3.3 0 2-2.5 2.4-4.5 1" stroke="white" strokeWidth="1.45" /></>,
  tailwind: <path fill="currentColor" stroke="none" d="M12 5.1c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.8 2.2 1.5 1.1 1.1 2.4 2.4 5.6 2.4 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.8-2.2-1.5-1.1-1.1-2.4-2.4-5.6-2.4Zm-6 6.9c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.8 2.2 1.5 1.1 1.1 2.4 2.4 5.6 2.4 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.8-2.2-1.5C10.5 13.3 9.2 12 6 12Z" />,
  vite: <><path fill="currentColor" stroke="none" d="M1.5 4.6 10.9 21a1.2 1.2 0 0 0 2.1 0l9.5-16.4a.8.8 0 0 0-.9-1.2L12 5.2 2.4 3.4a.8.8 0 0 0-.9 1.2Z" /><path fill="#fcd34d" stroke="none" d="m15.4 1-6.2 1.2-.9 10.1 3.3-.8-.8 6.4 5.4-9.6-3.2.7L15.4 1Z" /></>,
} satisfies Record<string, ReactNode>

export function Icon({ name, className = 'size-5' }: { name: keyof typeof icons; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  )
}
