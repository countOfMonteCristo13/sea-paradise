import Heading from '../Heading/Heading'
import InfoCard from '../InfoCard/InfoCard'
import { infoCards } from '../../utils/infoCards';
import './info.css'

const Info = () => {
  return (
    <section id='info'>
        <Heading title='Info'/>
        <div className='info-section'>
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
