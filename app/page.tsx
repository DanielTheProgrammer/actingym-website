import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Clapperboard,
  Dumbbell,
  Mail,
  MessageSquareQuote,
  Mic2,
  Play,
  ShieldCheck,
  Sparkles,
  Upload,
} from 'lucide-react';

const dimensions = [
  ['Opening', 78],
  ['Listening', 84],
  ['Truth', 81],
  ['Objective', 73],
  ['Vocal', 66],
  ['Presence', 88],
  ['World', 70],
];

const reviewNotes = [
  {
    time: '00:04',
    label: 'Opening',
    text: 'You enter the take already explaining. Start with the thought you are trying to hide.',
  },
  {
    time: '00:31',
    label: 'Listening',
    text: 'The turn after her silence is alive. Stay on her longer before you answer.',
  },
  {
    time: '01:12',
    label: 'Next take',
    text: 'Play the verb to corner, not to convince. Let the smile become the weapon.',
  },
];

const steps = [
  {
    icon: Upload,
    title: 'Upload the take',
    text: 'Record in the app or bring in the self-tape you are about to submit.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Get the review',
    text: 'ActinGym scores the tape and gives timestamped notes in a director voice.',
  },
  {
    icon: Dumbbell,
    title: 'Train the pattern',
    text: 'The app prescribes focused exercises so the next take has a real adjustment.',
  },
];

const trainingItems = [
  'Moment-before checks',
  'Objective and obstacle work',
  'Vocal energy without pushing',
  'Opening-impact drills',
  'Listening and reaction reps',
  'Scene-specific next-take verbs',
];

function PhoneMock() {
  return (
    <div className="phone-shell" aria-label="ActinGym app review mock">
      <div className="phone-camera" />
      <div className="phone-screen">
        <div className="screen-top">
          <span>ActinGym</span>
          <span>Take 2</span>
        </div>
        <div className="score-stack">
          <div>
            <p>Director's Review</p>
            <strong>82</strong>
          </div>
          <span>Bookable shape</span>
        </div>
        <div className="dimension-grid">
          {dimensions.map(([label, score]) => (
            <div className="dimension" key={label}>
              <div>
                <span>{label}</span>
                <b>{score}</b>
              </div>
              <i style={{ width: `${score}%` }} />
            </div>
          ))}
        </div>
        <div className="screen-note">
          <span>Priority note</span>
          <p>Stop showing us the hurt. Fight to keep the hurt private.</p>
        </div>
      </div>
    </div>
  );
}

function RadarMark() {
  return (
    <svg className="radar-mark" viewBox="0 0 180 180" role="img" aria-label="Acting performance dimensions radar chart">
      <polygon points="90,16 158,58 142,134 90,164 38,134 22,58" />
      <polygon points="90,36 135,66 124,121 90,140 52,122 45,69" />
      <polyline points="90,30 136,62 120,118 94,144 58,116 40,70 90,30" />
      <line x1="90" y1="16" x2="90" y2="164" />
      <line x1="22" y1="58" x2="158" y2="58" />
      <line x1="38" y1="134" x2="158" y2="58" />
      <line x1="142" y1="134" x2="22" y2="58" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-bg" src="/assets/actingym-splash.png" alt="" />
        <div className="hero-shade" />
        <header className="site-nav" aria-label="Main navigation">
          <a className="brand-link" href="#top" aria-label="ActinGym home">
            <img src="/assets/actingym-icon.png" alt="" />
            <span>ActinGym</span>
          </a>
          <nav>
            <a href="#review">Sample review</a>
            <a href="#method">How it works</a>
            <a href="#access">Early access</a>
          </nav>
        </header>

        <div className="hero-content" id="top">
          <div className="hero-copy">
            <p className="kicker">
              <span />
              AI acting coach for self-tape auditions
            </p>
            <h1 id="hero-title">ActinGym</h1>
            <p className="hero-lede">
              Upload your self-tape. Get director-level feedback in 2 minutes, then train the exact pattern holding the take back.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="mailto:hello@actingym.com?subject=ActinGym early access">
                <Mail size={18} aria-hidden="true" />
                Get early access
              </a>
              <a className="button ghost" href="#review">
                <Play size={18} aria-hidden="true" />
                See the review
              </a>
            </div>
          </div>

          <div className="hero-device">
            <PhoneMock />
          </div>
        </div>

        <div className="hero-strip" aria-label="Product highlights">
          <span>Self-tape analysis</span>
          <span>Timestamped director notes</span>
          <span>Acting Class drills</span>
          <span>iOS first</span>
        </div>
      </section>

      <section className="pain-band" aria-label="Actor self-tape problem">
        <div className="section-inner pain-grid">
          <p className="hand-note">Most actors submit into silence.</p>
          <div>
            <h2>The tape is the room now. Feedback is still missing.</h2>
            <p>
              ActinGym is built for the actor who records three takes, knows something is off, and has no director in the apartment to name it.
            </p>
          </div>
          <ul className="truth-list">
            <li>
              <Check size={18} aria-hidden="true" />
              Calls out observable behavior, not vague emotion.
            </li>
            <li>
              <Check size={18} aria-hidden="true" />
              Gives actable adjustments for the next take.
            </li>
            <li>
              <Check size={18} aria-hidden="true" />
              Turns repeated weaknesses into training work.
            </li>
          </ul>
        </div>
      </section>

      <section className="review-section" id="review" aria-labelledby="review-title">
        <div className="section-inner review-grid">
          <div className="review-copy">
            <p className="kicker light">
              <span />
              Sample director's review
            </p>
            <h2 id="review-title">A score is the start. The timestamped note is the work.</h2>
            <p>
              The app looks across opening impact, listening, truth, objective clarity, vocal instrument, presence, and grounding. Then it turns the take into specific next-take direction.
            </p>
            <div className="review-actions">
              <a className="button primary dark" href="mailto:hello@actingym.com?subject=ActinGym early access">
                <Mail size={18} aria-hidden="true" />
                Join the iOS list
              </a>
            </div>
          </div>

          <div className="review-board">
            <div className="board-top">
              <div>
                <span>Ozark S4E2 - Ruth</span>
                <strong>Take 2 review</strong>
              </div>
              <b>82</b>
            </div>
            <div className="notes-list">
              {reviewNotes.map((note) => (
                <article className="note-row" key={note.time}>
                  <time>{note.time}</time>
                  <div>
                    <span>{note.label}</span>
                    <p>{note.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="board-footer">
              <RadarMark />
              <div>
                <span>Strongest</span>
                <b>Listening 84</b>
                <span>Growth edge</span>
                <b>Vocal 66</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="method-section" id="method" aria-labelledby="method-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="kicker">
              <span />
              How it works
            </p>
            <h2 id="method-title">One loop: tape, review, train.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="step-card" key={step.title}>
                  <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="training-section" aria-labelledby="training-title">
        <div className="section-inner training-grid">
          <div className="training-copy">
            <p className="kicker">
              <span />
              Acting Class inside the app
            </p>
            <h2 id="training-title">Not another dashboard. A place to rehearse the note.</h2>
            <p>
              Every review can become a short training path: exercises, scene prep, progress tracking, and the next take you should actually try.
            </p>
            <a className="text-link" href="#access">
              Start with early access
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="exercise-paper">
            <div className="paper-pin" />
            <h3>Today's class</h3>
            <div className="exercise-list">
              {trainingItems.map((item) => (
                <div key={item}>
                  <Clapperboard size={16} aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="access-section" id="access" aria-labelledby="access-title">
        <div className="section-inner access-grid">
          <div>
            <p className="kicker light">
              <span />
              iOS first
            </p>
            <h2 id="access-title">Be ready when ActinGym opens.</h2>
            <p>
              The app is built around a focused subscription: director-level analysis, score cards, and prescribed practice work for actors who self-tape.
            </p>
          </div>
          <div className="access-panel">
            <div className="price-line">
              <span>Launch pricing in app</span>
              <strong>$35/mo</strong>
              <em>monthly early-access plan</em>
            </div>
            <a className="button primary" href="mailto:hello@actingym.com?subject=ActinGym early access">
              <Mail size={18} aria-hidden="true" />
              Request early access
            </a>
            <p>
              Placeholder CTA until `hello@actingym.com` is fully connected.
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-inner footer-grid">
          <a className="brand-link footer-brand" href="#top" aria-label="ActinGym home">
            <img src="/assets/actingym-icon.png" alt="" />
            <span>ActinGym</span>
          </a>
          <p>Director-level feedback for the take you are almost ready to send.</p>
          <div className="footer-icons" aria-label="Product pillars">
            <span>
              <ShieldCheck size={18} aria-hidden="true" />
              Private tapes
            </span>
            <span>
              <Mic2 size={18} aria-hidden="true" />
              Self-tape first
            </span>
            <span>
              <BarChart3 size={18} aria-hidden="true" />
              Growth tracked
            </span>
            <span>
              <Sparkles size={18} aria-hidden="true" />
              Specific notes
            </span>
          </div>
          <a className="text-link footer-mail" href="mailto:hello@actingym.com">
            hello@actingym.com
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}
