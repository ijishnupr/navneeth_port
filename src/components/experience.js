import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Experience(){

    return <Fragment>
        <div className="container">
            <div className="row">
                <div className="col mt-5">
                <p className="small text-center mt-5">where ?</p>
                <h2 id="expeirence" className="skillhead">EXPERIENCE</h2>

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon="fa-brands fa-react" />}
    >
        
    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Remote</h4>
    <p>
      React Developer, Shebirth
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: '#AE3905', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    
    date="10/2020-22/2023"
    iconStyle={{ background: 'Red', color: '#fff' }}
    
    >
    <h3 className="vertical-timeline-element-title">Developer Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Remote</h4>
    <p>
      Developer Intern , Shebirth
    </p>
  </VerticalTimelineElement>
 
</VerticalTimeline>
    </div>
</div>
    </div>
    </Fragment>
}