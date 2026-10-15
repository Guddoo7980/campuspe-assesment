import React, { useEffect, useState } from 'react';

import { ArrowRight, X, CheckCircle2 } from 'lucide-react';

import './Common.css';

export function Button({ children, href, onClick, variant = 'primary', className = '', type = 'button' }) {
const cls = `button button--${variant} ${className}`;

  return href ? <a className={cls} href={href}>{children}
      <ArrowRight size={15} />
    </a> : <button type={type} className={cls} onClick={onClick}>{children}
      <ArrowRight size={15} />
    </button>
}
export function SectionTag({ children }) {
  return <div className="section-tag">
      <span className="tag-dot" />{children}
    </div>
}
export function Modal({ open, onClose, title = 'Get started', children }) {
useEffect(() => {
if (!open) return;
    const fn = (e) => { if (e.key === 'Escape') onClose() };
    document.addEventListener('keydown', fn);

    return () => document.removeEventListener('keydown', fn)
}, [open, onClose]);
  if (!open) return null;

  return <div className="modal-backdrop" onMouseDown={onClose}>
      <section className="modal-panel" role="dialog" aria-modal="true" aria-label={title} onMouseDown={e => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          <X size={20} />
        </button>
        <h2>{title}
        </h2>{children}
      </section>
    </div>
}
export function SignupForm({ mode = 'waitlist' }) {
const [sent, setSent] = useState(false);
  function submit(e) {
e.preventDefault();
    setSent(true)
} return sent ? <div className="success-note">
      <CheckCircle2 size={34} />
      <h3>You're on the list!</h3>
      <p>Thanks for your interest. This is a frontend demo, so your details weren't sent to a server.</p>
    </div> : <form className="signup-form" onSubmit={submit}>
      <p>{mode === 'waitlist' ? 'Be first to hear when this feature launches.' : 'Explore your next opportunity with CampusPe.'}
      </p>
      <label htmlFor="full-name">Full name</label>
      <input required id="full-name" autoComplete="name" placeholder="Your name" />
      <label htmlFor="email-address">Email address</label>
      <input required id="email-address" type="email" autoComplete="email" placeholder="you@example.com" />
      <button className="button button--primary" type="submit">{mode === 'waitlist' ? 'Join the waitlist' : 'Continue'} <ArrowRight size={16} />
      </button>
    </form>
}
