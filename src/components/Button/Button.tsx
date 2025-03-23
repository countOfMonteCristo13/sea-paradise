import './button.css'

interface ButtonProps{
    name:string;
    className?:string;
    handleClick?:() => void;
}

const Button = ({name, className, handleClick}: ButtonProps) => {
  return (
    <button className={`btn ${className}`} onClick={handleClick}>{name}</button>
  )
}

export default Button
