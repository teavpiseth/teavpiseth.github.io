import labels from './data/labels.json'
import type { Language } from '../content'

export const academyCopy = labels

export function courseLevelText(level: string, language: Language) {
  if (level === 'beginner' || level === 'intermediate') return labels[language][level]
  return level
}
