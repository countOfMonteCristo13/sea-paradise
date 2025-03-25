import useShowSectionAnimation from '../../hooks/useShowSectionAnimation/useShowSectionAnimation';
import { galleryImages } from '../../utils/gallery'
import Heading from '../Heading/Heading'
import './gallery.css'

const Gallery = () => {

  const sectionId = 'gallery-section';
  const isVisble = useShowSectionAnimation({sectionId});

  return (
    <section id='gallery'>
      <Heading title="Galerija"/>
      <div id='gallery-section' className={`gallery-section ${isVisble ? 'visible' : ''}`}>
        {
          galleryImages.map(img => (
              <img src={img} alt='img' key={img}/>
          ))
        }
      </div>
    </section>
  )
}

export default Gallery
