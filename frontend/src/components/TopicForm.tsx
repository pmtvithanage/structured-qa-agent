import type { FormEvent } from 'react'

import { ArrowRightIcon, SearchIcon, SpinnerIcon } from './Icons'

interface TopicFormProps {
  value: string
  loading: boolean
  suggestions: string[]
  onChange: (value: string) => void
  onSubmit: (topic: string) => void
  onSuggestion: (topic: string) => void
}

export function TopicForm({
  value,
  loading,
  suggestions,
  onChange,
  onSubmit,
  onSuggestion,
}: TopicFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(value)
  }

  return (
    <form className="topic-form" onSubmit={handleSubmit}>
      <div className="composer">
        <SearchIcon className="composer__icon" />
        <label className="sr-only" htmlFor="topic-input">
          Topic to explain
        </label>
        <input
          id="topic-input"
          className="composer__input"
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="What do you want to understand?"
          maxLength={200}
          autoComplete="off"
          spellCheck={false}
          disabled={loading}
        />
        <button
          className="composer__submit"
          type="submit"
          disabled={loading || !value.trim()}
        >
          {loading ? (
            <SpinnerIcon className="spinner" />
          ) : (
            <ArrowRightIcon />
          )}
          <span>{loading ? 'Thinking' : 'Explain'}</span>
        </button>
      </div>

      <div className="suggestions" aria-label="Suggested topics">
        <span className="suggestions__label">Try</span>
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            className="chip"
            type="button"
            disabled={loading}
            onClick={() => onSuggestion(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </form>
  )
}
