import './heading.css'

const Heading = ({title}:{title:string}) => {
  return (
    <h2 className='heading'>{title}</h2>
  )
}

export default Heading
