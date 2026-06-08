import './TitmeLine.css';

interface TimeLineProps {
  time: string;
  institution?: string;
  content: string;
}

function TimeLine({ time, institution, content }: TimeLineProps) {
  return (
    <div className="timeline-item">
      {/* Spine */}
      <div className="timeline-spine">
        <div className="timeline-dot" />
        <div className="timeline-line" />
      </div>

      {/* Content */}
      <div className="timeline-body">
        <span className="timeline-time">{time}</span>
        {institution && <h3 className="timeline-institution">{institution}</h3>}
        <p className="timeline-content">{content}</p>
      </div>
    </div>
  );
}

export default TimeLine;