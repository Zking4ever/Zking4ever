import './ProjectPreview.css';

export default function ProjectPreview() {
  return (
     <div className="project-box">
              <div className="project-container">
                  <div className="left">
                    <div className="project-poster">
                      Poster
                    </div>
                    <div className="project-content">
                      <span className='title'>Content</span>
                    </div>
                    </div>
                  <div className="right">
                    <div className="logo"></div>
                    <div className="features">
                      <span style={{fontSize:17,fontWeight:'bold'}}> Features</span>
                      <ul>
                        <li>Feature Lorem ipsum dolor sit amet.</li>
                        <li>Feature one</li>
                        <li>Feature one</li>
                        <li>Feature one</li>
                        <li>Feature one</li>
                      </ul>
                    </div>
                  </div>
              </div>
              <div className="detail">
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, quaerat necessitatibus voluptate neque, tempora laborum mollitia omnis accusantium fugiat officia, quod repellat delectus illo nulla consequuntur itaque. Saepe, sunt omnis exercitationem non eos incidunt recusandae, vel eius soluta ducimus assumenda?</span>
                <button className="project-btn" style={{marginTop: '1rem'}}>Visit</button>
                <button className="project-btn" style={{marginTop: '1rem'}}>Code</button>
              </div>
            </div>
  )
}
