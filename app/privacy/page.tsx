import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - ActinGym',
  description: 'How ActinGym collects, uses, and protects account, self-tape, analysis, purchase, and usage information.',
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">← ActinGym</Link>
      <article className="legal-card">
        <p className="legal-kicker">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated May 8, 2026</p>

        <p>
          ActinGym helps actors upload or record self-tape videos, receive
          performance analysis, and train with personalized acting exercises.
          This policy explains what information we collect and how we use it.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect:</p>
        <ul>
          <li>Account information, including email address, display name, and sign-in provider.</li>
          <li>User content, including videos, audio, thumbnails, scripts, self-assessments, scene preparation answers, analysis results, training history, and progress.</li>
          <li>Purchase and entitlement information, including subscription status, analysis credits, promo-code redemptions, referral status, and App Store transaction identifiers provided by our payment infrastructure.</li>
          <li>Usage information, including onboarding progress, paywall interactions, restore attempts, feature usage, and diagnostic events.</li>
          <li>Device and technical information needed to operate the app, detect errors, secure accounts, and improve reliability.</li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>To provide self-tape analysis, training, and progress features.</li>
          <li>To save your account and make your work available across devices.</li>
          <li>To verify subscriptions, promo codes, referrals, and analysis-credit usage.</li>
          <li>To improve product quality, performance, and reliability.</li>
          <li>To respond to support requests and enforce our terms.</li>
        </ul>

        <h2>Videos, Audio, and Analysis</h2>
        <p>
          Self-tape videos and related audio are uploaded so ActinGym can
          generate feedback and training recommendations. Analysis results may
          include scores, observations, notes, and suggested exercises derived
          from your uploaded content.
        </p>

        <h2>Purchases</h2>
        <p>
          Payments are processed by Apple through the App Store. ActinGym
          receives purchase and entitlement events so the app can unlock paid
          features and manage analysis credits. We do not receive your full
          payment card details.
        </p>

        <h2>Analytics</h2>
        <p>
          We use analytics to understand app usage and improve reliability. We
          do not use session replay in the current production app.
        </p>

        <h2>Sharing</h2>
        <p>
          We share information only with service providers needed to operate
          ActinGym, such as cloud hosting, authentication, analytics, payment
          entitlement, storage, and AI-processing providers. We do not sell
          personal information.
        </p>

        <h2>Account Deletion</h2>
        <p>
          You can delete your ActinGym account from Settings in the app.
          Deleting your account removes or anonymizes personal account data and
          deletes app-managed videos, thumbnails, analyses, scenes, and progress
          where feasible. App Store subscriptions are managed by Apple and must
          be cancelled from your Apple ID subscription settings.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy or support requests, contact ActinGym at{' '}
          <a href="mailto:hello@actingym.com">hello@actingym.com</a> or visit{' '}
          <Link href="/support">actingym.com/support</Link>.
        </p>
      </article>
    </main>
  );
}
