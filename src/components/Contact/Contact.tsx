import Heading from '../Heading/Heading'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOpen } from 'react-icons/io5';
import './contact.css'

const Contact = () => {
  return (
    <section id='contact'>
        <Heading title='Kontakt'/>
        <div className='contact-section'>
            <div className="contact-section__info">
                <div className='contact-section__info-icon'>
                    <FaPhoneAlt size='2rem' color='#000000'/>
                </div>
                <a className='contact-section__info-title' href='tel:+306946707322'>
                    +306946707322
                </a>
            </div>
            <div className="contact-section__info">
                <div className='contact-section__info-icon'>
                    <FaLocationDot size='2rem' color='#000000'/>
                </div>
                <a className='contact-section__info-title' target='_blank' href='https://www.google.com/maps/place/Sea+Paradise/@40.2512105,23.2490894,15z/data=!4m6!3m5!1s0x14a87b5a2aa858e7:0xd2cce13696b68f05!8m2!3d40.2512105!4d23.2490894!16s%2Fg%2F11y752mnwf?hl=sr-RS&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D'>
                    Paralia Dionisiou, Chalkidiki, Greece
                </a>
            </div>
            <div className="contact-section__info">
                <div className='contact-section__info-icon'>
                    <IoMailOpen size='2rem' color='#000000'/>
                </div>
                <h4 className='contact-section__info-title'>
                    paraliadionisouapartment@gmail.com
                </h4>

            </div>
        </div>
    </section>
  )
}

export default Contact
