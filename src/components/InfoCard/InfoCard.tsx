import './infoCard.css'
import { IconType } from "react-icons";

interface InfoCardProps{
    key?:string;
    icon:IconType;
    title:string;
}

const InfoCard = ({icon:Icon,title}:InfoCardProps) => {
  return (
    <div className="info-card">
      <h4 className='info-card__title'>
        {title}
      </h4>
      <div className='info-card__icon'>
        <Icon size='2.5rem' color="#000000"/>
      </div>
    </div>
  )
}

export default InfoCard
