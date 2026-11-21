import type { Language } from '../content.ts'
import javascript from './data/javascript-fundamentals.json' with { type: 'json' }
import react from './data/react-essentials.json' with { type: 'json' }
import backend from './data/javascript-backend.json' with { type: 'json' }

export type LocalizedText = Record<Language, string>

export type CourseCard = {
  title: LocalizedText
  description: LocalizedText
}

type CourseLink = {
  label: LocalizedText
  href: string
}

type CourseFact = {
  label: LocalizedText
  value: LocalizedText
}

type CardSection = {
  description?: LocalizedText
  items: CourseCard[]
}

export type CourseModule = CourseCard & {
  id: string
  exampleUrl?: string
}

export type Course = {
  id: string
  topic: string
  icon: string
  level: string
  hero: CourseCard & { label: LocalizedText }
  objectives: CardSection
  format: {
    delivery: LocalizedText
    facts: CourseFact[]
    highlights: LocalizedText[]
    prerequisites: LocalizedText
  }
  techStack: {
    groups: {
      title: LocalizedText
      items: { name: string; mark: string; role: LocalizedText }[]
    }[]
  }
  workflow: { description: LocalizedText; tools: LocalizedText[] }
  approach: { description: LocalizedText; steps: LocalizedText[] }
  roadmap: {
    groups: { title: LocalizedText; modules: CourseModule[] }[]
  }
  projects: CardSection
  outcomes: CardSection & { summary: LocalizedText }
  access: {
    price: LocalizedText
    description: LocalizedText
    action: CourseLink
    benefits: LocalizedText[]
  }
  studyPlan: { description: LocalizedText; schedule?: CourseFact[] }
  instructor: {
    name: LocalizedText
    initials: string
    image?: string
    role: LocalizedText
    description: LocalizedText
    skills: string[]
    profile?: CourseLink
  }
  benefits: CardSection
  closing: CourseCard
}

export const academyPath = '/academy'

export function coursePath(id: string) {
  return `/courses/${id}`
}

export const courses: Course[] = [javascript, react, backend]
