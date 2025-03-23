import Heading from '../Heading/Heading';
import './location.css';
import useShowSectionAnimation from '../../hooks/useShowSectionAnimation/useShowSectionAnimation';

const Location = () => {
  const sectionId = 'location-section';
  const isVisible = useShowSectionAnimation({sectionId});

  return (
    <section id="location">
      <Heading title="Lokacija" />
      <div
        id="location-section"
        className={`location-section ${isVisible ? 'visible' : ''}`}
      >
        <div className="location-section__img">
        <a target='_blank' href='https://www.google.com/maps/place/Sea+Paradise/@40.2512105,23.2490894,15z/data=!4m6!3m5!1s0x14a87b5a2aa858e7:0xd2cce13696b68f05!8m2!3d40.2512105!4d23.2490894!16s%2Fg%2F11y752mnwf?hl=sr-RS&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D'>
          <img src="/mapa.png" alt="google-map" />
        </a>
        </div>
        <div className="location-section__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde beatae eum minima, temporibus ut aliquam veniam quia
          laudantium voluptate earum animi eius inventore ducimus illo quae quam nihil officia incidunt!
        </div>
      </div>
    </section>
  );
};

export default Location;
