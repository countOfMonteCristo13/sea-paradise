import useShowSectionAnimation from '../../hooks/useShowSectionAnimation/useShowSectionAnimation'
import { galleryImages } from '../../utils/gallery'
import Heading from '../Heading/Heading'
import './aboutUs.css'

const AboutUs = () => {

  const sectionId = 'about-section'
  const isVisible = useShowSectionAnimation({sectionId});

  return (
    <section id='about'>
      <Heading title='Apartman kraj mora'/>
      <div id='about-section' className={`about-section ${isVisible ? 'visible' : ''}`}>
        <div className='about-section__text'>
        Apartman je opremljen za 4 odrasle osobe i 1 malo dete. 
        Najveći šarm i zadovoljstvo pruža ogromna terasa sa koje se pruža 
        veličanstven pogled na poluostrvo Kasandra i naravno more.
        </div>
        <div className='about-section__img'>
                  {
                    galleryImages.map((img,i) => {
                      if(i % 2 === 0){
                        return <img src={img} alt='img' key={img}/>
                      }
                  })
                  }
        </div>
      </div>
    </section>
  )
}

export default AboutUs
