import { AlertIcon, RefreshIcon } from './Icons'

interface ErrorCardProps {
  message: string
  onRetry: () => void
}

export function ErrorCard({ message, onRetry }: ErrorCardProps) {
  return (
    <div className="error-card" role="alert">
      <div className="error-card__icon">
        <AlertIcon />
      </div>
      <div className="error-card__body">
        <h2>That explanation did not come through</h2>
        <p>{message}</p>
      </div>
      <button className="retry-button" type="button" onClick={onRetry}>
        <RefreshIcon />
        Try again
      </button>
    </div>
  )
}
