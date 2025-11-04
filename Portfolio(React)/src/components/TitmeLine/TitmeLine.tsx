import './TitmeLine.css'

function TimeLine({time,content}:{time:string,content:string}) {
    return (
               <>
               <div className="timeline">
                    <span className='timeline-time'>{time}</span>
                    <div className="timeline-content">
                        {content}
                    </div>
                </div>

               </>
    );
};

export default TimeLine;