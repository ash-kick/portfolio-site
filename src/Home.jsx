import { Link } from 'react-router-dom'
import GeometricBackground from './GeometricBackground'
import './App.css'

export default function Home() {
  return (
    <div className="hero-wrapper">
      <GeometricBackground />
      <div className="hero-content">
        <h1>
          <span className="name-gradient">
            Ashley
            <br />
            Kicklighter
          </span>
        </h1>
        <p className="role">Full Stack Software Engineer</p>
        <p className="description">
          Building user-focused web applications, with experience in health tech and large-scale data pipelines.
        </p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn btn-primary">
            View Projects <span className="btn-arrow">→</span>
          </Link>
          <a
            href="/Ashley_Kicklighter_Software_Engineer_Resume.pdf"
            download="Ashley_Kicklighter_Software_Engineer_Resume.pdf"
            className="btn btn-secondary"
          >
            Download My CV
            <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
