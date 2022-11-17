import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {
let den_or_show = props.isMoleVisible ? 'den' : 'show'


  return (
    <div  className={den_or_show}>
      <img  src={MoleIcon} className="Mole" alt="Mole" />
    </div>
  )
}

export default Mole
