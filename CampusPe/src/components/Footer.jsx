import React from 'react';
import { ArrowRight, Phone, Mail, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import { footerGroups } from '../data/content';
import { Button } from './Common';
import './Footer.css';

export default function Footer({ onSignup }) {
  return <footer id="footer" className="footer">
      <div className="container">
        <div className="support-card" id="support">
          <h3>Still have questions?</h3>
          <p>Our support team is here to help you succeed. Get in touch anytime.</p>
          <div>
            <Button onClick={() => onSignup('Contact CampusPe support')}>Contact Support</Button>
            <Button variant="outline" onClick={() => onSignup('Schedule a call')}>Schedule a Call</Button>
          </div>
        </div>
        <div className="next-card" id="waitlist">
          <div>
            <h3>Ready for what's next?</h3>
            <p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p>
          </div>
          <div>
            <Button href="#colleges">Explore Colleges</Button>
            <Button href="#opportunities">Find Opportunities</Button>
            <Button variant="outline" href="#colleges">List Your College</Button>
            <Button variant="outline" onClick={() => onSignup('Post a Job')}>Post a Job</Button>
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-about">
            <a href="#top" className="footer-logo">CampusPe</a>
            <p>From choosing a college to finding your next opportunity. CampusPe connects students, colleges and employers in one place.</p>
            <a href="mailto:contact@campuspe.com">
              <Mail size={14} /> contact@campuspe.com</a>
          </div>
          <div className="footer-columns">{footerGroups.map(group => <div className="footer-column" key={group.title}>
              <h4>{group.title}
              </h4>{group.items.map(item => <a key={item} href={group.title === 'For Employers' ? '#employers' : group.title === 'For Students' ? '#opportunities' : group.title === 'For Colleges' ? '#colleges' : '#support'}>{item}
              </a>)}
            </div>)}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CampusPe. All rights reserved.</span>
          <span className="developer-credit">Developed by <strong>Guddu</strong>
          </span>
          <div className="social-links">{[[Instagram, 'Instagram', 'https://instagram.com'], [Linkedin, 'LinkedIn', 'https://linkedin.com'], [Facebook, 'Facebook', 'https://facebook.com'], [Youtube, 'YouTube', 'https://youtube.com']].map(([Icon, name, url]) => <a href={url} key={name} target="_blank" rel="noopener noreferrer" aria-label={name}>
              <Icon size={15} />
            </a>)}
          </div>
        </div>
      </div>
    </footer>
}
