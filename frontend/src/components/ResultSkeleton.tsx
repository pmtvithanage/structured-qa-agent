export function ResultSkeleton() {
  return (
    <div className="result-card skeleton-card">
      <div className="skeleton-row">
        <span className="skeleton skeleton--pill" />
        <span className="skeleton skeleton--button" />
      </div>
      <span className="skeleton skeleton--title" />
      <span className="skeleton skeleton--line" />
      <span className="skeleton skeleton--line skeleton--short" />
      <div className="skeleton-divider" />
      <span className="skeleton skeleton--label" />
      {[0, 1, 2].map((item) => (
        <div className="skeleton-point" key={item}>
          <span className="skeleton skeleton--dot" />
          <span className="skeleton skeleton--line" />
        </div>
      ))}
      <div className="skeleton skeleton--example" />
      <span className="sr-only" role="status">
        Generating your explanation...
      </span>
    </div>
  )
}
