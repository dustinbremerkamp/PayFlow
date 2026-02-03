import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header>
        <div className="brand">PayFlow</div>
        <nav className="nav-links">
          <Link href="/pricing">Pricing</Link>
          <Link href="#" className="button secondary">
            Sign in
          </Link>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div>
            <h1>Automated invoice follow-ups, without the awkward calls</h1>
            <p>
              PayFlow connects to QuickBooks to send polite, branded reminders
              for overdue invoices—keeping your cash flow steady while you stay
              focused on the work.
            </p>
          </div>
          <div className="cta-group">
            <Link href="/pricing" className="button primary">
              Start subscription
            </Link>
            <Link href="#" className="button secondary">
              Sign in
            </Link>
          </div>
        </section>

        <section className="section">
          <h2>Trustworthy by design</h2>
          <div className="trust-grid">
            <div className="card">
              <h3>QuickBooks-connected</h3>
              <p>
                Pulls invoice status directly from your accounting data so every
                reminder is accurate and timely.
              </p>
            </div>
            <div className="card">
              <h3>Human tone, automated</h3>
              <p>
                Gentle follow-ups that feel personal, with full control over
                cadence and branding.
              </p>
            </div>
            <div className="card">
              <h3>Clear visibility</h3>
              <p>
                Track which reminders were sent and which invoices are resolved
                without digging through threads.
              </p>
            </div>
          </div>
        </section>

        <div className="footer">© 2024 PayFlow. All rights reserved.</div>
      </main>
    </>
  );
}
