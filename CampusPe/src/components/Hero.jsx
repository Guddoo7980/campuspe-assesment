import React from 'react';
import { Bell, Check, GraduationCap, BriefcaseBusiness, ShieldCheck, UsersRound, FileText, Sparkles, ArrowUpRight } from 'lucide-react';
import { audiences, stats } from '../data/content';
import { Button } from './Common';
import './Hero.css';

export default function Hero({ onSignup }) {
  return <section className="hero-section" id="top">
      <div className="container hero-inner">
        <div className="hero-floating hero-float-left">
          <div className="float-title">
            <span className="green-dot" /> WhatsApp Alert</div>
          <strong>Get notified on whatsapp</strong>
          <p>You'll get all important updates on your whatsapp</p>
        </div>
        <div className="hero-floating hero-float-right">
          <div className="float-title purple">
            <FileText size={13} /> Resume Builder</div>
          <strong>Build Your Resume</strong>
          <p>Our resume builder gives you dynamic options to build resumes</p>
        </div>
        <div className="hero-heading">
          <span className="hero-pill">
            <Sparkles size={15} /> AI-Powered Campus Assistant</span>
          <h1>Connect <span>10X Faster.</span>
          </h1>
          <p>One platform connecting students, colleges & employers — faster.</p>
          <div className="looking-row">
            <span>✦</span>
            <h2>What are you looking for?</h2>
            <span>✦</span>
          </div>
        </div>
        <div className="micro-card micro-card-left">
          <span className="brand-mini">C<span>●</span>C<span>●</span>
          </span>
          <div>
            <b>142 students matched today</b>
            <small>And more are on their way</small>
          </div>
        </div>
        <div className="micro-card micro-card-right">
          <span>👨🏻‍💻</span>
          <div>
            <b>Resumes built for shortlisted dreams</b>
            <small>Verified resumes · Easy to apply</small>
          </div>
        </div>
        <div className="audience-grid">{audiences.map((audience, i) => { const Icon = audience.icon;
 return <article id={audience.id === 'colleges' ? 'colleges' : undefined} className={'audience-card audience-card--' + audience.id} key={audience.id} style={{ '--index': i }}>
            <div className="audience-card-top">
              <span className="audience-icon">
                <Icon size={19} />
              </span>
              <span className="status-chip">{audience.eyebrow}
              </span>
            </div>
            <h3>{audience.title}
            </h3>
            <p>{audience.description}
            </p>
            <ul>{audience.items.map(item => <li key={item}>
                <Check size={12} />{item}
              </li>)}
            </ul>
            <Button onClick={() => audience.id === 'jobs' ? document.querySelector('#opportunities')?.scrollIntoView({ behavior: 'smooth' }) : onSignup('Join the CampusPe waitlist')}>{audience.button}
            </Button>
            <span aria-hidden="true" className="card-watermark">{audience.id === 'colleges' ? '▥' : audience.id === 'jobs' ? '▤' : '▦'}
            </span>
          </article> })}
        </div>
        <div className="stats-grid">{stats.map(item => { const Icon = item.icon;
 return <div className="stat" key={item.label}>
            <span className="stat-icon">
              <Icon size={24} />
            </span>
            <div>
              <strong>{item.number}
              </strong>
              <p>{item.label}
              </p>
            </div>
          </div> })}
        </div>
        <div className="partners" aria-label="Our ecosystem partners">
          <p>Trusted by partners across India</p>
          <div className="partner-marquee">
            <div className="partner-track">
              {[0, 1].map((copy) => (
                <div className="partner-group" key={copy} aria-hidden={copy === 1}>
                  <span className="partner-logo gins"><b className="partner-symbol">◉</b><span>GINSERV<small>Nurturing Ventures</small></span></span>
                  <span className="partner-logo startup"><b className="partner-symbol">➤</b><span>STARTUP<small>KARNATAKA</small></span></span>
                  <span className="partner-logo crest"><b className="partner-symbol">✺</b><span>Innovation<small>Partner</small></span></span>
                  <span className="partner-logo talent"><b className="partner-symbol">✣</b><span>TALENTSPOTIFY<small>Talent community</small></span></span>
                  <span className="partner-logo radiant"><b className="partner-symbol">◆</b><span>RADIANT<small>Growth partner</small></span></span>
                  <span className="partner-logo partner-seal"><b className="partner-symbol">✹</b><span>INDIA<small>Campus network</small></span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
}
