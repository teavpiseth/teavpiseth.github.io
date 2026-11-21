import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, matchPath, Route, Routes, useLocation } from 'react-router-dom'
import { container } from './components/ui'
import { brandName, copy, sections } from './content'
import type { Language } from './content'
import { Academy } from './course/Academy'
import { CourseDetail, MissingPage } from './course/CourseDetail'
import { academyCopy } from './course/copy'
import { academyPath, courses } from './course/courses'
import { Icon } from './Icon'
import { Home } from './Home'

type Theme = 'light' | 'dark'

const toolbarButton = 'min-h-10 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg px-2 text-sm font-semibold text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white'
const activeLink = 'bg-red-50 text-accent dark:bg-accent/12 dark:text-accent-dark'
const inactiveLink = 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white'

function readPreference(key: 'language' | 'theme') {
  try {
    return localStorage.getItem(`teavpiseth-${key}`)
  } catch {
    return null
  }
}

function savePreference(key: 'language' | 'theme', value: Language | Theme) {
  try {
    localStorage.setItem(`teavpiseth-${key}`, value)
  } catch {
    // Keep the preference for this visit when storage is unavailable.
  }
}

function initialLanguage(): Language {
  const saved = readPreference('language')
  if (saved === 'km' || saved === 'en') return saved
  return navigator.language.toLowerCase().split('-')[0] === 'km' ? 'km' : 'en'
}

function initialTheme(): Theme | null {
  const saved = readPreference('theme')
  return saved === 'dark' || saved === 'light' ? saved : null
}

function Brand() {
  return (
    <Link to="/" className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-bold whitespace-nowrap sm:gap-2.5 sm:text-base">
      <img
        src={`${import.meta.env.BASE_URL}favicon.svg`}
        alt=""
        width={40}
        height={40}
        className="size-9 shrink-0 rounded-[10px] shadow-xs ring-1 ring-zinc-200 sm:size-10 dark:ring-white/12"
      />
      <span lang="en" className="font-sans">{brandName}</span>
    </Link>
  )
}

function App() {
  const location = useLocation()
  const [language, setLanguage] = useState(initialLanguage)
  const [theme, setTheme] = useState(initialTheme)
  const [systemDark, setSystemDark] = useState(() => matchMedia('(prefers-color-scheme: dark)').matches)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const main = useRef<HTMLElement>(null)
  const previousPath = useRef(location.pathname)
  const dark = theme ? theme === 'dark' : systemDark
  const t = copy[language]
  const academy = academyCopy[language]
  const home = location.pathname === '/'
  const catalog = Boolean(matchPath(academyPath, location.pathname))
  const courseId = matchPath('/courses/:courseId', location.pathname)?.params.courseId
  const course = courses.find(({ id }) => id === courseId)
  const title = home ? t.pageTitle : `${course?.hero.title[language] ?? (catalog ? academy.title : academy.missingTitle)} | ${brandName}`
  const description = home ? t.description : course?.hero.description[language] ?? (catalog ? academy.description : academy.missingDescription)

  const navigation = sections.map((section) => {
    let current: 'page' | 'location' | undefined
    if (section === 'academy') {
      current = catalog ? 'page' : course ? 'location' : undefined
    } else if (home && (location.hash || '#home') === `#${section}`) {
      current = 'location'
    }
    return {
      label: t.nav[section],
      to: section === 'academy' ? academyPath : `/#${section}`,
      current,
    }
  })

  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)')
    const update = () => setSystemDark(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useLayoutEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    if (previousPath.current !== location.pathname) {
      main.current?.focus({ preventScroll: true })
      previousPath.current = location.pathname
    }
  }, [location])

  useLayoutEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    root.lang = language
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [dark, description, language, title])

  function switchLanguage() {
    const next = language === 'en' ? 'km' : 'en'
    setLanguage(next)
    savePreference('language', next)
  }

  function switchTheme() {
    const next = dark ? 'light' : 'dark'
    setTheme(next)
    savePreference('theme', next)
  }

  return (
    <div className={`flex min-h-screen flex-col bg-zinc-50 text-zinc-950 selection:bg-red-200 selection:text-zinc-950 dark:bg-[#101012] dark:text-zinc-50 dark:selection:bg-red-900 dark:selection:text-white ${language === 'km' ? 'font-khmer' : 'font-sans'}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white">
        {t.skip}
      </a>

      <header
        className="sticky top-0 z-40 border-b border-zinc-200/65 bg-white/90 backdrop-blur-xl dark:border-white/8 dark:bg-[#151517]/90"
        onKeyDown={(event) => {
          if (event.key === 'Escape' && menuOpen) {
            setMenuOpen(false)
            menuButton.current?.focus()
          }
        }}
      >
        <div className={`${container} flex min-h-17 items-center justify-between gap-2 sm:gap-4`}>
          <Brand />

          <nav aria-label={t.navigation} className="hidden items-center gap-1 min-[850px]:flex">
            {navigation.map(({ to, label, current }) => (
              <Link
                key={to}
                to={to}
                aria-current={current}
                className={`rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors lg:px-4 ${current ? activeLink : inactiveLink}`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button type="button" onClick={switchLanguage} aria-label={t.switchLanguage} className={`${toolbarButton} inline-flex min-w-10`}>
              <Icon name="language" className="hidden size-[18px] min-[360px]:block" />
              {language === 'en' ? (
                <span lang="km" className="font-khmer">ខ្មែរ</span>
              ) : (
                <span lang="en" className="font-sans">
                  <span className="min-[360px]:hidden">EN</span>
                  <span className="hidden min-[360px]:inline">English</span>
                </span>
              )}
            </button>
            <button type="button" onClick={switchTheme} aria-label={dark ? t.toLight : t.toDark} className={`${toolbarButton} inline-flex min-w-10`}>
              <Icon name={dark ? 'sun' : 'moon'} className="size-[18px]" />
            </button>
            <button
              type="button"
              ref={menuButton}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? t.close : t.menu}
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${toolbarButton} inline-flex min-w-10 min-[850px]:hidden`}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} />
            </button>
          </div>
        </div>

        <nav id="mobile-navigation" aria-label={t.navigation} hidden={!menuOpen} className={`${container} border-t border-zinc-200 py-2 min-[850px]:hidden dark:border-white/10`}>
          {navigation.map(({ to, label, current }) => (
            <Link
              key={to}
              to={to}
              aria-current={current}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-lg px-3 py-2.5 font-medium transition-colors ${current ? activeLink : inactiveLink}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </header>

      <main ref={main} id="main" tabIndex={-1} className="grow scroll-mt-20">
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path={academyPath} element={<Academy language={language} />} />
          <Route path="/courses/:courseId" element={course ? <CourseDetail key={course.id} course={course} language={language} /> : <MissingPage language={language} />} />
          <Route path="*" element={<MissingPage language={language} />} />
        </Routes>
      </main>

      <footer className="border-t border-white/8 bg-[#101012] text-zinc-100">
        <div className={`${container} flex flex-wrap items-center justify-between gap-x-6 gap-y-5 py-7`}>
          <Brand />
          <nav aria-label={t.footerNavigation} className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-zinc-400">
            {navigation.map(({ to, label }) => (
              <Link key={to} to={to} className="rounded transition-colors hover:text-white">{label}</Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
