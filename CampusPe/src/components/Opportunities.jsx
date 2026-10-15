import React, { useEffect, useState } from 'react';
import { Zap, MapPin, ArrowUpRight, ChevronRight } from 'lucide-react';
import { discoverSteps, openings, filters } from '../data/content';
import { Button, SectionTag } from './Common';
import './Opportunities.css';

export default function Opportunities({ onSignup }) {
const [filter, setFilter] = useState('All');
  const [offset, setOffset] = useState(0);
  const visible = openings.filter(x => filter === 'All' || x.category === filter);
  useEffect(() => {
if (filter !== 'All') return;
    const timer = setInterval(() => setOffset(i => (i + 1) % openings.length), 3300);

    return () => clearInterval(timer)
}, [filter]);
  const ordered = filter === 'All' ? [...visible.slice(offset), ...visible.slice(0, offset)] : visible;

  return <section className="opportunities-section section-gradient" id="opportunities">
      <div className="container opportunities-layout">
        <div className="opportunities-copy">
          <SectionTag>01 · Opportunity Discovery</SectionTag>
          <h2>Stop searching.<br />
            <span>Start getting matched.</span>
          </h2>
          <p className="section-lead">Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.</p>
          <div className="discovery-steps">{discoverSteps.map((step, i) => {
const Icon = step.icon;

          return <div className="discovery-step" key={step.title}>
              <span className="step-number">{String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="step-line">
                  <b>{step.title}
                  </b>
                  <span>{step.badge}
                  </span>
                </div>
                <p>{step.body}
                </p>
              </div>
            </div>
})}
          </div>
          <Button href="#resume">Explore opportunities</Button>
        </div>
        <div className="feed-wrap">
          <div className="opportunity-feed">
            <div className="feed-header">
              <div className="feed-title-icon">
                <Zap size={19} fill="white" />
              </div>
              <div>
                <h3>CampusPe Opportunity Feed</h3>
                <p>Colleges & opportunities matched to you</p>
              </div>
              <span className="feed-today">✦ 12 new matches today</span>
            </div>
            <div className="feed-filters" role="group" aria-label="Filter opportunities">{filters.map(item =>
              <button key={item} className={filter === item ? 'active' : ''} onClick={() => {
setFilter(item);
              setOffset(0)
}}>{item}
              </button>)}
            </div>
            <div className="feed-window" aria-live="polite">{ordered.slice(0, 3).map((job, i) =>
              <article className="job-item" key={`${job.company}-${job.role}`} style={{ animationDelay: `${i * .07}s` }}>
                <span className="job-logo">{job.icon}
                </span>
                <div className="job-content">
                  <div className="job-title-line">
                    <b>{job.company}
                    </b>
                    <span>{job.tag}
                    </span>
                  </div>
                  <small>
                    <MapPin size={11} />{job.location}
                  </small>
                  <p>{job.details}
                  </p>
                </div>
                <button onClick={() => onSignup(`Explore ${job.role}`)}>{job.category === 'Internships' || job.category === 'Jobs' ? 'Apply Now' : 'View Details'}
                </button>
              </article>)}{ordered.length === 0 && <p className="empty-jobs">More opportunities coming soon!</p>}
            </div>
            <div className="feed-bottom">
              <button onClick={() => setFilter('All')}>View all matched opportunities <ChevronRight size={14} />
              </button>
              <small>Curated for you · Updated daily</small>
            </div>
          </div>
          <p className="feed-handwritten">↶ &nbsp;
          A mix of colleges, jobs,<br /> internships and gigs — all in one place.</p>
        </div>
      </div>
    </section>
}
