import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'
import { explainTopic } from './api'
import { EmptyState } from './components/EmptyState'
import { ErrorCard } from './components/ErrorCard'
import { HowItWorks } from './components/HowItWorks'
import { BrandMark, SparklesIcon } from './components/Icons'
import { RecentTopics } from './components/RecentTopics'
import { ResultCard } from './components/ResultCard'
import { ResultSkeleton } from './components/ResultSkeleton'
import { TopicForm } from './components/TopicForm'
import { useRecentTopics } from './hooks/useRecentTopics'
import type { TopicSummary } from './types'

type Status = 'idle' | 'loading' | 'success' | 'error'

const SUGGESTIONS = [
  'Photosynthesis',
  'Binary search',
  'Inflation',
  'Neural networks',
]

function App() {
  const [topic, setTopic] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [result, setResult] = useState<TopicSummary | null>(null)
  const [error, setError] = useState('')
  const abortRef = useRef<AbortController | null>(null)
  const { recent, addRecent, clearRecent } = useRecentTopics()

  useEffect(() => {
    return () => abortRef.current?.abort()
  }, [])

  const runExplanation = useCallback(
    async (rawTopic: string) => {
      const trimmed = rawTopic.trim()
      if (!trimmed) return

      abortRef.current?.abort()
      const controller = new AbortController()
      abortRef.current = controller

      setTopic(trimmed)
      setStatus('loading')
      setError('')
      setResult(null)

      try {
        const explanation = await explainTopic(trimmed, controller.signal)
        if (controller.signal.aborted) return
        setResult(explanation)
        setStatus('success')
        addRecent(trimmed)
      } catch (caught) {
        if (controller.signal.aborted) return
        setError(
          caught instanceof Error
            ? caught.message
            : 'Something went wrong while generating the explanation.',
        )
        setStatus('error')
      } finally {
        if (abortRef.current === controller) abortRef.current = null
      }
    },
    [addRecent],
  )

  const handleSelectTopic = useCallback(
    (nextTopic: string) => {
      void runExplanation(nextTopic)
    },
    [runExplanation],
  )

  const handleChange = useCallback((value: string) => setTopic(value), [])

  const handleSubmit = useCallback(
    (nextTopic: string) => {
      void runExplanation(nextTopic)
    },
    [runExplanation],
  )

  return (
    <div className="app">
      <header className="site-header">
        <div className="brand">
          <span className="brand__mark">
            <BrandMark />
          </span>
          <div className="brand__copy">
            <span className="brand__name">Clarity</span>
            <span className="brand__tagline">Structured QA</span>
          </div>
        </div>
        <div className="header-meta">
          <span className="header-pill">
            <span className="status-dot" />
            Gemini 3.5 Flash
          </span>
        </div>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">
            <SparklesIcon />
            Structured answers for curious minds
          </p>
          <h1>
            Learn anything,
            <br />
            <em>clearly.</em>
          </h1>
          <p className="hero__lede">
            Ask a question and get a beginner-friendly explanation shaped into
            a summary, three key points, a difficulty rating, and one everyday
            example.
          </p>
        </section>

        <section className="workspace" aria-label="Explain a topic">
          <div className="workspace__main">
            <TopicForm
              value={topic}
              loading={status === 'loading'}
              suggestions={SUGGESTIONS}
              onChange={handleChange}
              onSubmit={handleSubmit}
              onSuggestion={handleSelectTopic}
            />

            <div className="results" aria-live="polite">
              {status === 'loading' ? <ResultSkeleton /> : null}
              {status === 'error' ? (
                <ErrorCard
                  message={error}
                  onRetry={() => handleSelectTopic(topic)}
                />
              ) : null}
              {status === 'success' && result ? (
                <ResultCard result={result} />
              ) : null}
              {status === 'idle' ? <EmptyState /> : null}
            </div>
          </div>

          <aside className="sidebar" aria-label="Extras">
            <RecentTopics
              recent={recent}
              onSelect={handleSelectTopic}
              onClear={clearRecent}
            />
            <HowItWorks />
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <span>Built with LangChain, Gemini, and a strict Pydantic schema.</span>
        <span>Structured by design.</span>
      </footer>
    </div>
  )
}

export default App
