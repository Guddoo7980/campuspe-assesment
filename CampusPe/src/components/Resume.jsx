import React, { useRef, useState } from 'react';
import { UploadCloud, FileCheck2, CheckCircle2, ShieldCheck, Target, Layers, Search } from 'lucide-react';
import { SectionTag } from './Common';
import './Resume.css';

const benefits = [{ icon: CheckCircle2, title: 'Resume analyzed', desc: 'Ready in 4s' }, { icon: Target, title: 'Skills matched', desc: 'Deep taxonomy' }, { icon: Layers, title: 'Experience matched', desc: 'Contextual similarity' }, { icon: Search, title: '1,000+ sources searched', desc: 'Real-time aggregators' }];

export default function Resume() {
const input = useRef(null);
  const [file, setFile] = useState(null);
  const [drag, setDrag] = useState(false);
  function accept(files) {
const selected = files?.[0];
    if (!selected) return;
    if (!/\.(pdf|doc|docx)$/i.test(selected.name)) {
alert('Please choose a PDF, DOC or DOCX file.');

      return
} if (selected.size > 10 * 1024 * 1024) {
alert('Please select a file under 10 MB.');

      return
} setFile(selected)
} return <section id="resume" className="resume-section">
      <div className="container">
        <div className="resume-heading">
          <SectionTag>✦ Try it live · v2.4 AI Engine</SectionTag>
          <h2>Upload your resume.<br />
            <span>Find jobs that fit.</span>
          </h2>
          <p>Upload once. CampusPe reads your skills, experience, and preferences —<br /> then finds relevant jobs across 1,000+ sources.</p>
        </div>
        <div className="resume-upload-wrap">
          <span className="resume-floating left">
            <CheckCircle2 size={21} /> <span>
              <b>99% Match Rate</b>
              <small>AI consistently precise</small>
            </span>
          </span>
          <div className={`resume-uploader ${drag ? 'dragging' : ''}`} onDragOver={e => {
e.preventDefault();
          setDrag(true)
}} onDragLeave={() => setDrag(false)} onDrop={e => {
e.preventDefault();
          setDrag(false);
          accept(e.dataTransfer.files)
}}>
            <UploadCloud size={30} color="#158fff" />
            <h3>{file ? file.name : 'Upload your resume'}
            </h3>
            <p>{file ? 'Your file is ready. Connect a backend to enable live AI matching.' : "PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand your skills and experience."}
            </p>
            <button className="button button--primary" onClick={() => input.current?.click()}>{file ? 'Change resume' : 'Upload resume'} <UploadCloud size={16} />
            </button>
            <input ref={input} type="file" accept=".pdf,.doc,.docx" hidden onChange={e => accept(e.target.files)} />
              <small>or drag and drop your file here</small>
              <div className="formats">
                <b>PDF</b>
                <b>DOC</b>
                <b>DOCX</b>
              </div>
            </div>
            <span className="resume-floating right">
              <ShieldCheck size={21} />
              <span>
                <b>ATS Compliant</b>
                <small>Standardized parser</small>
              </span>
            </span>
          </div>
          <div className="resume-benefits">{benefits.map(item => {
const Icon = item.icon;

        return <div className="resume-benefit" key={item.title}>
              <span>
                <Icon size={22} />
              </span>
              <div>
                <strong>{item.title}
                </strong>
                <small>{item.desc}
                </small>
              </div>
            </div>
})}
          </div>
        </div>
      </section>
}
