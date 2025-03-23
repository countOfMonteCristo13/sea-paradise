import { galleryImages } from '../../utils/gallery'
import Heading from '../Heading/Heading'
import './gallery.css'

const Gallery = () => {
  return (
    <section id='gallery'>
      <Heading title="Galerija"/>
      <div className='gallery'>
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
