import { Link } from 'react-router-dom'

function CTA() {
  return (
    <div className="home-section cta-section">
          <div className="section">
            <div className="cta-card">
              <div className="cta-glow" />
              <p className="section-label">Let's Collaborate</p>
              <h2 className="cta-title">Have a project in mind? ⚡</h2>
              <p className="cta-desc">
                I'm actively seeking new opportunities. My inbox is always open —
                whether you have a question or just want to say hello!
              </p>
              <Link to="/contact" className="btn btn-primary">
                Start a Conversation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
  )
}

export default CTA;