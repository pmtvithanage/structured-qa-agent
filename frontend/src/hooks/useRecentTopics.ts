import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'structured-qa:recent:v1'
const MAX_RECENT = 6

function readRecent(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter((item): item is string => typeof item === 'string')
      .slice(0, MAX_RECENT)
  } catch {
    return []
  }
}

export function useRecentTopics() {
  const [recent, setRecent] = useState<string[]>(readRecent)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recent))
    } catch {
      // Storage can be unavailable in private mode; recent topics are optional.
    }
  }, [recent])

  const addRecent = useCallback((topic: string) => {
    setRecent((previous) => {
      const normalized = topic.toLowerCase()
      return [
        topic,
        ...previous.filter((item) => item.toLowerCase() !== normalized),
      ].slice(0, MAX_RECENT)
    })
  }, [])

  const clearRecent = useCallback(() => setRecent([]), [])

  return { recent, addRecent, clearRecent }
}
