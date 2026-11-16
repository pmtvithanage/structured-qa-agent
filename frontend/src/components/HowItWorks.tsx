export function HowItWorks() {
  return (
    <section className="sidebar-card">
      <div className="sidebar-card__head">
        <h2>How it works</h2>
        <span className="sidebar-badge">3 steps</span>
      </div>
      <ol className="steps">
        <li className="step">
          <span className="step__num">01</span>
          <div>
            <h3>Ask a topic</h3>
            <p>Type anything you want to understand, big or small.</p>
          </div>
        </li>
        <li className="step">
          <span className="step__num">02</span>
          <div>
            <h3>Get it structured</h3>
            <p>A summary, three key points, difficulty, and an example.</p>
          </div>
        </li>
        <li className="step">
          <span className="step__num">03</span>
          <div>
            <h3>Take it with you</h3>
            <p>Copy the explanation and keep learning at your own pace.</p>
          </div>
        </li>
      </ol>
    </section>
  )
}
