import Button from '../Button/Button'
// import NavBar from '../NavBar/NavBar'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero-section' id='home'>
      <div className='hero-section__overlay'/>
      {/* <NavBar/> */}
      <h1 className='hero-section__title'>Sea Paradise</h1>
      <Button name='Rezerviši' className='hero-section__btn'/>
    </div>
  )
}

export default Hero
