import React from 'react';
import { employerSteps } from '../data/content';
import { SectionTag, Button } from './Common';
import './Employers.css';

export default function Employers({ onSignup }) {
  return <section className="employer-section" id="employers">
      <div className="container employer-layout">
        <div className="employer-copy">
          <SectionTag>01 · For Employers</SectionTag>
          <h2>Stop running<br />campus drives.<br />
            <span>Start hiring the right people.</span>
          </h2>
          <p className="section-lead">Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.</p>
          <Button onClick={() => onSignup('Post a job with CampusPe')}>Post a Job</Button>
        </div>
        <div className="employer-steps">{employerSteps.map((step, i) =>
          <article className="employer-step" key={step.title}>
            <span className="employer-count">{String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h3>{step.title} <small>INSTANT SETUP</small>
              </h3>
              <p>{step.body}
              </p>
            </div>
            <span className="employer-badge">{step.badge}
            </span>
          </article>)}
        </div>
      </div>
    </section>
}
