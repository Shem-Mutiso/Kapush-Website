import { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HowItWorksModal from '../components/HowItWorksModal'
import { useContactModal } from '../context/ContactModalContext'

const steps = [
  ['01', 'Partner', 'Your organisation pending on agreement with kapush on boards the employees'],
  ['02', 'Approval', 'Employees request the financial support they need through the digital journey.'],
  ['03', 'Verify', 'Employment and income information supports a clear approval process.'],
  ['04', 'Disbursement', 'Once approved, funds are disbursed and repayment follows the agreed process.'],
]

const testimonials = [
  ['“Thanks to Kapush, my wife was able to undergo an emergency medical procedure and she is now back on her feet.”', 'Clarence', 'Employee, Lesan Caterers'],
  ['“Thanks a lot for your support with Kapush umenisaidia sana naomba iendelee kugrow zaidi.”', 'Philemon', 'Employee, Denri Africa'],
  ['“Ever since Kapush was introduced, I have been able to access capital that has assisted in finishing the construction of my home. Asante sana Kapush.”', 'Francis', 'Employee, Lesan Caterers'],
]

function StepVisual({ type }: { type: 'partner' | 'apply' | 'verify' | 'access' }) {
  const photos = {
    partner: '/images/partner-photo.jpg',
    apply: '/images/apply-photo.jpg',
    verify: '/images/verify-photo.jpg',
    access: '/images/access-photo.jpg',
  }

  const labels = {
    partner: 'EMPLOYER PARTNERSHIP',
    apply: 'DIGITAL APPLICATION',
    verify: 'SECURE VERIFICATION',
    access: 'FUNDS READY',
  }

  return (
    <div className={`step-visual photo-step photo-step-${type}`} aria-hidden="true">
      <img src={photos[type]} alt="" />
      <div className="photo-step-overlay" />
      <div className="visual-chip">{labels[type]}</div>
      <div className="photo-step-glow" />
    </div>
  )
}

export default function Home() {
  const { openContact } = useContactModal()
  const [showHow, setShowHow] = useState(false)

  return (
    <div className="kapush-page">
      <Nav />
      <main>
        <section className="hero-v2">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-grid" />
          <div className="hero-inner">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span /> FINANCIAL OPPORTUNITY, REIMAGINED</div>
              <h1>When work counts, <em>opportunity grows.</em></h1>
              <p className="hero-lead">Kapush uses verified employment and income data to help Africa’s working economy access fair, responsible credit.</p>
              <div className="hero-actions">
                <button className="btn btn-yellow" onClick={openContact}>Partner with Kapush <span>→</span></button>
                <button className="btn btn-ghost" onClick={() => setShowHow(true)}>See how it works</button>
              </div>
              <div className="hero-proof"><span>✓</span> Employment-backed access <span>✓</span> Digital journey <span>✓</span> Built for Africa</div>
            </div>

            <div className="photo-hero-stage reveal reveal-delay">
              <img className="hero-photo" src="/images/hero-photo.jpg" alt="African employee using the Kapush app at work" />
              <div className="hero-photo-overlay" />
              <div className="floating-card approval"><span className="check">✓</span><div><small>LOAN STATUS</small><strong>Approved</strong></div></div>
              <div className="floating-card amount"><small>FINANCIAL ACCESS</small><strong>Ready when you need it</strong><span>Built around verified work</span></div>
              <div className="hero-photo-caption">
                <span>BUILT FOR AFRICA</span>
                <strong>Real work. Real opportunity.</strong>
              </div>
            </div>
          </div>
          <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section className="mission-section mission-photo-section" id="mission">
          <img className="mission-photo" src="/images/mission-photo.jpg" alt="African workers in a modern workplace" />
          <div className="mission-overlay" />
          <div className="mission-content"><div className="section-kicker">OUR MISSION</div><div className="mission-number">1<span>BILLION</span></div><h2>To lift 1 billion Africans out of poverty by <span>2035.</span></h2><p>We are building toward a self-sustaining Africa where every worker’s productivity unlocks access to fair credit and financial growth.</p><div className="mission-pills"><span>2035 TARGET</span><span>AFRICA</span><span>FINANCIAL GROWTH</span></div></div>
        </section>

        <section className="vision-section"><div className="vision-line" /><div className="section-kicker">OUR VISION</div><h2>A self-sustaining Africa where every worker’s <span>productivity</span> unlocks fair credit and financial growth.</h2><button className="btn btn-yellow" onClick={openContact}>Build the future with us <span>→</span></button></section>

        <section className="statement-strip">
          <div><span>01</span><strong>Work</strong><small>is a financial signal.</small></div>
          <div><span>02</span><strong>Trust</strong><small>can be built from verified data.</small></div>
          <div><span>03</span><strong>Opportunity</strong><small>grows when access becomes fair.</small></div>
        </section>

        <section className="story-section" id="about">
          <div className="section-kicker">THE KAPUSH IDEA</div>
          <div className="story-grid">
           <h2>When <span>work counts,</span> opportunity grows.</h2>
            <div><p>KAPUSH is a fintech company unlocking financial opportunity for Africa’s working economy — especially people excluded from formal financial systems because they lack traditional credit histories.</p><p>We believe that work itself is proof of financial reliability. By leveraging verified employment and income data, KAPUSH transforms employment into a trusted financial signal.</p><button className="text-link" onClick={openContact}>Talk to our team <span>→</span></button></div>
          </div>
        </section>

        <section className="flow-section" id="how">
          <div className="section-heading"><div><div className="section-kicker">HOW KAPUSH WORKS</div><h2>From employment<br /><span>to opportunity.</span></h2></div><p>One connected journey for employers, HR teams and employees.</p></div>
          <div className="flow-grid">
            {steps.map(([num, title, text], index) => {
              const type = ['partner', 'apply', 'verify', 'access'][index] as 'partner' | 'apply' | 'verify' | 'access'
              return (
                <article className="flow-card" key={num}>
                  <div className="flow-number">{num}</div>
                  <div className="flow-icon">{num === '01' ? '↗' : num === '02' ? '⌁' : num === '03' ? '✓' : '◆'}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <StepVisual type={type} />
                </article>
              )
            })}
          </div>
          <button className="center-link" onClick={() => setShowHow(true)}>Explore the interactive journey <span>→</span></button>
        </section>

        <section className="audience-section">
          <div className="audience-card employer"><div className="card-number">FOR EMPLOYERS</div><h2>Support your people without adding complexity.</h2><p>Give employees a meaningful financial benefit while keeping the journey structured, transparent and aligned with your organisation.</p><button onClick={openContact}>Partner with us →</button><div className="card-shape">🏢</div></div>
        </section>

        <section className="testimonials-section" id="stories">
          <div className="section-heading"><div><div className="section-kicker">REAL STORIES</div><h2>Access that helps<br /><span>people move forward.</span></h2></div><p>These are the experiences shared by Kapush employees and customers.</p></div>
          <div className="testimonial-grid">{testimonials.map(([quote, name, role]) => <article className="testimonial" key={name}><div className="quote-mark">“</div><p>{quote}</p><div className="person"><div className="person-avatar">{name[0]}</div><div><strong>{name}</strong><small>{role}</small></div></div></article>)}</div>
        </section>

      </main>
      <Footer />
      <HowItWorksModal open={showHow} onClose={() => setShowHow(false)} />
    </div>
    
  )
}
