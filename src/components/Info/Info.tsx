import Heading from '../Heading/Heading'
import InfoCard from '../InfoCard/InfoCard'
import { infoCards } from '../../utils/infoCards';
import './info.css'
import useShowSectionAnimation from '../../hooks/useShowSectionAnimation/useShowSectionAnimation';

const Info = () => {
  const sectionId = 'info-section';
  const isVisible = useShowSectionAnimation({sectionId});

  return (
    <section id='info'>
        <Heading title='Info'/>
        <div id='info-section' className={`info-section ${isVisible ? 'visible' : ''}`}>
            {
                infoCards.map(card => (
                    <InfoCard key={card.title}  icon={card.icon} title={card.title}/>
                ))
            }
        </div>
    </section>
  )
}

export default Info
