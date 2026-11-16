import { ChevronRightIcon, ClockIcon } from './Icons'

interface RecentTopicsProps {
  recent: string[]
  onSelect: (topic: string) => void
  onClear: () => void
}

export function RecentTopics({
  recent,
  onSelect,
  onClear,
}: RecentTopicsProps) {
  return (
    <section className="sidebar-card">
      <div className="sidebar-card__head">
        <h2>Recent topics</h2>
        {recent.length > 0 ? (
          <button className="text-button" type="button" onClick={onClear}>
            Clear
          </button>
        ) : null}
      </div>

      {recent.length > 0 ? (
        <ul className="recent-list">
          {recent.map((topic) => (
            <li key={topic}>
              <button
                className="recent-item"
                type="button"
                onClick={() => onSelect(topic)}
              >
                <ClockIcon />
                <span>{topic}</span>
                <ChevronRightIcon className="recent-item__chevron" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="sidebar-empty">
          Topics you explain will show up here for a quick return trip.
        </p>
      )}
    </section>
  )
}
