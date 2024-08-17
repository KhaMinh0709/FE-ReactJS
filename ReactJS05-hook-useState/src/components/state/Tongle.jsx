import  {useState} from 'react'
import './ToggleStyle.css'
function Tongle() {
    const [on, setOn] = useState(false)
    console.log(on)
    return(
        <div>
            <div className='toggle'>
                <div className='spinner'></div>
            </div>
            <div className='tonggle-control'>
            <div className="toggle-on" onClick={()=> setOn(true)}>ON</div>
            <div className="toggle-off"onClick={()=> setOn(false)}>OFF</div>
            </div>
        </div>
    )

} export default Tongle