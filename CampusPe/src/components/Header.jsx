import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Common';
import './Header.css';

export default function Header({ onSignup }) {
const [menu, setMenu] = useState(false);
  const links = [['Colleges', '#colleges'], ['Employers', '#employers'], ['Jobs', '#opportunities'], ['Blogs', '#footer']];

  return <header className="site-header">
      <div className="header-inner container">
        <a href="#top" className="brand" aria-label="CampusPe home">
          <span className="brand-symbol">◉</span>Campus<span>Pe</span>
          <small>™</small>
        </a>
        <nav className={menu ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">{links.map(([name, href]) =>
          <a key={name} href={href} onClick={() => setMenu(false)}>{name}
          </a>)}
        </nav>
        <div className="header-actions">
          <button className="text-button" onClick={() => onSignup('Sign in to CampusPe')}>Sign in</button>
          <Button onClick={() => onSignup('Join CampusPe')}>Sign Up</Button>
        </div>
        <button className="mobile-menu" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(x => !x)}>{menu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
}
