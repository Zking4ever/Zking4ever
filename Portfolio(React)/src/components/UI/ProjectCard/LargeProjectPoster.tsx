import type { LargeProject } from '../../../pages/Projects';
import './LargeProjectPoster.css';

interface Props {
  project: LargeProject;
  index: number;
}

export default function LargeProjectPoster({ project, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <article
      className={`poster${isEven ? ' poster--even' : ' poster--odd'}`}
      style={{ '--accent': project.accent } as React.CSSProperties}
    >
      {/* ── PANEL MOSAIC ── */}
      <div className="poster-panels">
        <div
          className="panel panel-main"
          style={{ background: project.panels[0] }}
        >
          {/* Iframe preview of the live site */}
          <div className="panel-iframe-wrap">
            <iframe
              src={project.link}
              title={project.title}
              loading="lazy"
              className="panel-iframe"
              scrolling="no"
            />
            <div className="panel-iframe-overlay" />
          </div>
          {/* Comic speech bubble */}
          <div className="bubble bubble-main">
            <span className="bubble-text">{project.tagline}</span>
          </div>
        </div>

        <div className="panel-grid-side">
          <div
            className="panel panel-top-left"
            style={{ background: project.panels[1] }}
          >
            <div className="panel-icon">
              {project.tools.slice(0, 2).map(t => (
                <span key={t} className="panel-tool-chip">{t}</span>
              ))}
            </div>
            <div className="panel-label">{project.category}</div>
          </div>

          <div
            className="panel panel-top-right"
            style={{ background: project.panels[2] }}
          >
            <div className="panel-stats">
              <span className="panel-stat-num">
                {project.tools.length}
              </span>
              <span className="panel-stat-label">Tech Used</span>
            </div>
          </div>

          <div
            className="panel panel-bottom"
            style={{ background: project.panels[3] }}
          >
            {/* See details overlay */}
            <div className="panel-see-details">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="see-details-row"
              >
                <span>See details</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            
          </div>
        </div>
      </div>

      {/* ── INFO PANEL ── */}
      <div className="poster-info">
        <div className="poster-info-inner">
          {/* Category badge */}
          <span className="poster-category">{project.category}</span>

          {/* Headline */}
          <h3 className="poster-title">{project.title}</h3>

          {/* Description */}
          <p className="poster-description">{project.description}</p>

          {/* Tools */}
          <div className="poster-tools">
            {project.tools.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="poster-ctas">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Live
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            {project.gitlink && (
              <a
                href={project.gitlink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
