import useShowSectionAnimation from '../../hooks/useShowSectionAnimation/useShowSectionAnimation';
import { galleryImages } from '../../utils/gallery'
import Carousel from '../Carousel/Carousel';
import Heading from '../Heading/Heading'
import './gallery.css'

const Gallery = () => {

  const sectionId = 'gallery-section';
  const isVisble = useShowSectionAnimation({sectionId});

  return (
    <section id='gallery'>
      <Heading title="Galerija"/>
      <div id='gallery-section' className={`gallery-section ${isVisble ? 'visible' : ''}`}>
        {/* {
          galleryImages.map(img => (
              <img src={img} alt='img' key={img}/>
          ))
        } */}
        <div style={{ height: '600px', position: 'relative' }}>
            <Carousel
              baseWidth={300}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
        </div>
      </div>
    </section>
  )
}

export default Gallery
