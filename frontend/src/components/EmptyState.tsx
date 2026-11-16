import { CheckIcon, SparklesIcon } from './Icons'

export function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">
        <SparklesIcon />
      </div>
      <h2>Your explanation will land here</h2>
      <p>
        Ask about anything, from photosynthesis to supply and demand. Every
        answer comes back structured and easy to scan.
      </p>
      <div className="empty-state__meta">
        <span>
          <CheckIcon /> Simple language
        </span>
        <span>
          <CheckIcon /> 3 key points
        </span>
        <span>
          <CheckIcon /> Everyday example
        </span>
      </div>
    </div>
  )
}
