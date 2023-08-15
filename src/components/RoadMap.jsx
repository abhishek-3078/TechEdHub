import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link, useParams } from 'react-router-dom'
const RoadMap = () => {
  const { slug } = useParams()

  return (
    <>
    <VerticalTimeline lineColor={'blue'}>
    <VerticalTimelineElement
    
        // className="vertical-timeline-element--work"
        // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date=""
        iconStyle={{ background: 'rgb(124, 169, 56)', color: '#fff' }}

      >  <Link to = "/" className='relative'>

        <h2 className="vertical-timeline-element-title" style={{ fontWeight: 'bold' }}>Step - 1</h2>

        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
       </Link>
        

      </VerticalTimelineElement>

      <VerticalTimelineElement
        // className="vertical-timeline-element--work"
        date=""
        iconStyle={{ background: 'rgb(124, 169, 56)', color: '#fff' }}

      >
        <Link to =" /" >
        <h2 className="vertical-timeline-element-title" style={{ fontWeight: 'bold' }}>Step - 2</h2>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online Marketing
        </p></Link>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date=""
        iconStyle={{ background: 'rgb(124, 169, 56)', color: '#fff' }}

      >
        <Link to =" /" >
        <h2 className="vertical-timeline-element-title" style={{ fontWeight: 'bold' }}>Step - 3</h2>
        <p>
          User Experience, Visual Design
        </p></Link>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date=""
        iconStyle={{ background: 'rgb(255, 255, 0)', color: '#fff' }}

      > 
      <Link to =" /" >
        <h2 className="vertical-timeline-element-title" style={{ fontWeight: 'bold' }}>Step - 4</h2>
        <p>
          User Experience, Visual Design
        </p></Link>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{ background: 'rgb(255, 255, 0)', color: '#fff' }}

      >
        <Link to =" /" >
        <h2 className="vertical-timeline-element-title" style={{ fontWeight: 'bold' }}>Step - 5</h2>
        <p>
          Strategy, Social Media
        </p></Link>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        <Link to =" /" >
        <h2 className="vertical-timeline-element-title" style={{ fontWeight: 'bold' }}>Step - 6</h2>
        <p>
          Creative Direction, User Experience, Visual Design
        </p></Link>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date=""
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        <Link to =" /" >
        <h2 className="vertical-timeline-element-title" style={{ fontWeight: 'bold' }}>Step - 7</h2>
        <div id="imagesRight" className='absolute w-[300px] left-[700px] bottom-[20px]'>
          <img className='w-[120px] h-[120px]' src="https://cdn-icons-png.flaticon.com/128/1642/1642423.png" alt="error" />
      </div>
        <p>
          Creative Direction, Visual Design
        </p></Link>
      </VerticalTimelineElement>

    </VerticalTimeline>

      </>
  )
}

export default RoadMap;