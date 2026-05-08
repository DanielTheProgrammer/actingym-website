import Link from 'next/link';

export const metadata = {
  title: 'Support - ActinGym',
  description: 'Get support for ActinGym account, billing, subscription, analysis, privacy, and deletion requests.',
};

export default function SupportPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">← ActinGym</Link>
      <article className="legal-card">
        <p className="legal-kicker">Support</p>
        <h1>How can we help?</h1>
        <p className="legal-updated">ActinGym support</p>

        <p>
          For account, billing, privacy, app access, analysis, or deletion
          requests, email us and include the Apple or Google email you used to
          sign in.
        </p>

        <p>
          <a className="legal-button" href="mailto:hello@actingym.com?subject=ActinGym support">
            Email hello@actingym.com
          </a>
        </p>

        <h2>Subscriptions</h2>
        <p>
          ActinGym subscriptions are purchased through the App Store. You can
          restore purchases inside the app. Cancelling or managing an active
          subscription is handled in your Apple ID subscription settings.
        </p>

        <h2>Account Deletion</h2>
        <p>
          You can delete your ActinGym account from Settings in the app. If you
          cannot access the app, email us from the address connected to your
          account and we will help.
        </p>

        <p className="legal-small">
          Read the <Link href="/privacy">Privacy Policy</Link> and{' '}
          <Link href="/terms">Terms of Use</Link>.
        </p>
      </article>
    </main>
  );
}
