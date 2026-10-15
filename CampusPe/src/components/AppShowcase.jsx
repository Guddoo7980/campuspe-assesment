import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Home, Search, BriefcaseBusiness, UserRound, BookOpen, MapPin, Bell, Heart, CheckCircle2 } from 'lucide-react';
import { appScreens } from '../data/content';
import './AppShowcase.css';

function PhoneContent({ screen }) {
  return <div className="phone-display">
      <div className="phone-island" />
      <div className="phone-status">
        <span>9:41</span>
        <span>●●● ▰</span>
      </div>
      <div className="phone-app-header">
        <strong>{screen.title}
        </strong>
        <span>🔔</span>
      </div>
      <p className="phone-greeting">{screen.subtitle}
      </p>{screen.type === 'home' || screen.type === 'discover' ? <>
      <div className="phone-banner">
        <span className="phone-banner-badge">CAMPUSPE ✦</span>
        <b>Discover what<br />comes next.</b>
        <i>Explore now →</i>
        <div className="banner-orb" />
      </div>
      <div className="phone-mini-icons">{['🎓', '💼', '🏫', '✨'].map((x, i) =>
        <span key={i}>{x}
        </span>)}
      </div>
      <strong className="phone-block-title">Trending for you</strong>
      <div className="phone-picture-row">
        <div>🏛<small>Colleges</small>
        </div>
        <div>💻<small>Jobs</small>
        </div>
      </div>
      <div className="phone-listing">✨ &nbsp;
        Opportunities picked for you</div>
    </> : screen.type === 'profile' ? <>
    <div className="phone-profile">
      <span>👩🏻‍🎓</span>
      <b>Your career profile</b>
      <small>You're 85% ready!</small>
      <div className="progress-track">
        <i />
      </div>
    </div>{['Personal details', 'Education', 'Skills & interests', 'Upload resume', 'Preferences'].map(x => <div className="phone-listing" key={x}>
      <CheckCircle2 size={12} color="#2ccaa1" /> {x} <span>›</span>
    </div>)}</> : screen.type === 'college' ? <>
    <div className="phone-campus-banner">🏛️<strong>Find your dream campus</strong>
    </div>{['Featured colleges', 'Courses & programs', 'Admissions updates', 'Student reviews'].map(x => <div className="phone-listing" key={x}>🎓 &nbsp; {x} <span>›</span>
    </div>)}</> : <>{['Product Design Intern', 'Marketing Associate', 'Campus Ambassador', 'Frontend Developer', 'Content Writer'].map((x, i) => <div className="phone-opportunity" key={x}>
      <span>{['🔵', '🟣', '🟠', '🟢', '🔴'][i]}
      </span>
      <div>
        <b>{x}
        </b>
        <small>{i % 2 ? 'Remote · Internship' : 'Bengaluru · Full time'}
        </small>
      </div>
      <i>Match</i>
    </div>)}</>}
    <div className="phone-bottom-nav">
      <Home size={13} />
      <Search size={13} />
      <BriefcaseBusiness size={13} />
      <UserRound size={13} />
    </div>
    </div>
}
export default function AppShowcase() {
const [active, setActive] = useState(2); const [paused, setPaused] = useState(false); useEffect(() => { if (paused) return; const timer = setInterval(() => setActive(i => (i + 1) % appScreens.length), 3000);
 return () => clearInterval(timer) }, [paused]);
 return <section id="app" className="showcase-section">
      <div className="container">
        <div className="showcase-heading">
          <h2>Checkout Our App Interface Look</h2>
          <p>Experience the power of a unified campus ecosystem right in your pocket. CampusPe offers a tailored<br /> interface for every user — from exploring colleges to finding your next opportunity.</p>
        </div>
        <div className="phone-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-label="CampusPe mobile app previews">
          <button className="carousel-arrow prev" aria-label="Previous app screen" onClick={() => setActive(i => (i - 1 + appScreens.length) % appScreens.length)}>
            <ChevronLeft size={20} />
          </button>
          <div className="phone-stage">{appScreens.map((screen, i) => { let delta = (i - active + appScreens.length) % appScreens.length; if (delta > 2) delta -= appScreens.length;
 return <button type="button" aria-label={`Show ${screen.title} app preview`} onClick={() => setActive(i)} className={`phone-frame ${delta === 0 ? 'phone-active' : ''}`} style={{ '--position': delta, '--distance': Math.abs(delta), '--layer': 5 - Math.abs(delta) }} key={screen.title}>
              <PhoneContent screen={screen} />
            </button> })}
          </div>
          <button className="carousel-arrow next" aria-label="Next app screen" onClick={() => setActive(i => (i + 1) % appScreens.length)}>
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="carousel-dots" role="group" aria-label="Select app preview">{appScreens.map((s, i) => <button aria-label={`Show ${s.title}`} aria-pressed={active === i} key={s.title} className={active === i ? 'active' : ''} onClick={() => setActive(i)} />)}
          </div>
          <div className="download-row">
            <div>
              <h3>Download App Now</h3>
              <p>Elevate your academic journey with CampusPe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you're a student seeking your next big internship, a college looking to empower your cohort, or a company recruiting for top-tier talent, CampusPe streamlines the connection.</p>
              <div className="store-links">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" aria-label="Explore Google Play">
                  <span>▶</span>
                  <small>GET IT ON<strong>Google Play</strong>
                  </small>
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" aria-label="Explore App Store">
                  <span>●</span>
                  <small>Download on the<strong>App Store</strong>
                  </small>
                </a>
              </div>
            </div>
            <div className="phone-angled">
              <div className="angled-device device-back">
                <PhoneContent screen={appScreens[3]} />
              </div>
              <div className="angled-device device-front">
                <PhoneContent screen={appScreens[2]} />
              </div>
            </div>
          </div>
        </div>
      </section>
}
