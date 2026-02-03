import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <header>
        <div className="brand">PayFlow</div>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="#" className="button secondary">
            Sign in
          </Link>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div>
            <h1>Simple pricing for steady cash flow</h1>
            <p>
              One plan, everything you need to automate QuickBooks invoice
              reminders and keep clients moving.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="card plan">
            <h2>Monthly</h2>
            <div className="plan-price">$49</div>
            <p>Per company, billed monthly.</p>
            <ul>
              <li>Unlimited overdue invoice reminders</li>
              <li>Custom email cadence and templates</li>
              <li>QuickBooks Online sync</li>
              <li>Dedicated support</li>
            </ul>
            <div className="cta-group">
              <Link href="/#" className="button primary">
                Start subscription
              </Link>
              <Link href="/" className="button secondary">
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
