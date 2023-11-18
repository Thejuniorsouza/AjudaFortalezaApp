import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './TimeLine.modules.css'
import '../../img/search.svg'
import { Search, Buildings, CreditCard } from 'react-bootstrap-icons';



function TimeLine () {
    return (
<VerticalTimeline 
    layout={ "1-column-left" }
    lineColor={ "white" }
    animate={ true }
    className={ "timeline" }
>
        <h1 className='title-timeline'>Como funciona?</h1>
    
  <VerticalTimelineElement

    className="vertical-timeline-element--work"
    contentStyle={{ background: 'transparent', color: '#fff' }}
    iconStyle={{ background: '#80d0c7', color: '#fff' }}
    iconClassName={ "icon-timeline" }
    visible={ false }
    icon={<Search />}
  >
    <h3 className="vertical-timeline-element-title">Procure por uma ONG ou entidade que você se identifique.</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga totam quaerat dolore hic culpa ducimus iste illum esse perspiciatis, voluptatem blanditiis! Nobis non soluta iste aut facere quae labore cumque!
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'transparent', color: '#fff' }}
    iconStyle={{ background: '#80d0c7', color: '#fff' }}
    visible={ false }
    icon={<Buildings />}
  >
    <h3 className="vertical-timeline-element-title">Conheça e veja as necessidades dela.</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque vel odio quisquam quas reprehenderit soluta rem exercitationem. Reprehenderit accusantium autem vitae, nesciunt optio, dicta est, necessitatibus voluptatum laboriosam dolore repellat!
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'transparent', color: '#fff' }}
    iconStyle={{ background: '#80d0c7', color: '#fff' }}
    visible={ false }
    icon={<CreditCard />}
  >
    <h3 className="vertical-timeline-element-title">Doe a quantia que quiser.</h3>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere tenetur quas, omnis vitae temporibus dolore iste nostrum vero voluptatum saepe. Incidunt rerum excepturi iure ex molestiae nemo accusantium, porro soluta!
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
    )
}



export default TimeLine;