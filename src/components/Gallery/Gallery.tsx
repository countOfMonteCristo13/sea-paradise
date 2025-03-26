import useShowSectionAnimation from '../../hooks/useShowSectionAnimation/useShowSectionAnimation';
import Carousel from '../Carousel/Carousel';
import Heading from '../Heading/Heading'
import './gallery.css'

const Gallery = () => {

  const sectionId = 'gallery-section';
  const isVisble = useShowSectionAnimation({sectionId});

  return (
    <section id='gallery'>
      <Heading title="Galerija"/>
        <div style={{ height: '100%', position: 'relative' }} id='gallery-section' className={`gallery-section ${isVisble ? 'visible' : ''}`}>
            <Carousel
              baseWidth={600}
              autoplay={true}
              autoplayDelay={5000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
        </div>
    </section>
  )
}

export default Gallery
