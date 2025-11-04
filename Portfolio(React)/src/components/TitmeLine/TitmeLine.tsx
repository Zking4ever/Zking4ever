import './TitmeLine.css'

function TimeLine({time,content}){
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