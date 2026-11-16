import { useEffect, useRef, useState } from 'react'

import type { TopicSummary } from '../types'
import { CheckIcon, CopyIcon, LightbulbIcon } from './Icons'

interface ResultCardProps {
  result: TopicSummary
}

export function ResultCard({ result }: ResultCardProps) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  async function handleCopy() {
    const text = [
      result.title,
      '',
      result.summary,
      '',
      'Key points:',
      ...result.key_points.map((point, index) => `${index + 1}. ${point}`),
      '',
      `Everyday example: ${result.example}`,
    ].join('\n')

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard access can be blocked by the browser.
    }
  }

  return (
    <article className="result-card">
      <div className="result-card__top">
        <span className={`pill pill--${result.difficulty}`}>
          <span className="pill__dot" />
          {result.difficulty}
        </span>
        <button
          className="copy-button"
          type="button"
          onClick={() => void handleCopy()}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      <h2>{result.title}</h2>
      <p className="result-card__summary">{result.summary}</p>

      <div className="key-points">
        <h3>Key points</h3>
        <ol>
          {result.key_points.map((point, index) => (
            <li key={point}>
              <span className="key-points__index">{index + 1}</span>
              <span>{point}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="example">
        <div className="example__icon">
          <LightbulbIcon />
        </div>
        <div>
          <span className="example__label">Everyday example</span>
          <p>{result.example}</p>
        </div>
      </div>

      <div className="result-card__footer">
        <span>Structured response</span>
        <span>{result.key_points.length} key points</span>
      </div>
    </article>
  )
}
