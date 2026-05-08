import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use - ActinGym',
  description: 'Terms for using ActinGym self-tape analysis, training, subscriptions, credits, and account features.',
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <Link className="legal-back" href="/">← ActinGym</Link>
      <article className="legal-card">
        <p className="legal-kicker">Legal</p>
        <h1>Terms of Use</h1>
        <p className="legal-updated">Last updated May 8, 2026</p>

        <h2>Acceptance</h2>
        <p>
          By using ActinGym, you agree to these Terms and to the{' '}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>What ActinGym Provides</h2>
        <p>
          ActinGym provides tools for actors to upload or record self-tape
          performances, receive automated feedback, track progress, and train
          with acting exercises. ActinGym feedback is educational and
          informational. It is not a guarantee of casting, employment,
          representation, or artistic outcome.
        </p>

        <h2>Your Content</h2>
        <p>
          You are responsible for the videos, scripts, and other materials you
          upload or enter into the app. You should only upload content that you
          have the right to use. You grant ActinGym permission to process your
          content for the purpose of providing the app's analysis, training,
          storage, and support features.
        </p>

        <h2>Subscriptions and Credits</h2>
        <p>
          Paid features may require an active subscription, analysis credits,
          promo code, or referral unlock. Purchases are processed through the
          App Store and are subject to Apple's payment terms. Restore purchases
          is available in the app.
        </p>

        <h2>Account Deletion</h2>
        <p>
          You may delete your ActinGym account from Settings. Deleting your
          ActinGym account does not automatically cancel an App Store
          subscription; subscription management is handled by Apple.
        </p>

        <h2>Acceptable Use</h2>
        <p>
          Do not use ActinGym to upload illegal content, violate the rights of
          others, attempt to reverse engineer or attack the service, or misuse
          the app in a way that harms other users or the service.
        </p>

        <h2>Availability</h2>
        <p>
          ActinGym may change, suspend, or discontinue features as the product
          evolves. We work to keep the service reliable, but we do not
          guarantee uninterrupted availability.
        </p>

        <h2>Contact</h2>
        <p>
          For support, contact ActinGym at{' '}
          <a href="mailto:hello@actingym.com">hello@actingym.com</a> or visit{' '}
          <Link href="/support">actingym.com/support</Link>.
        </p>
      </article>
    </main>
  );
}
