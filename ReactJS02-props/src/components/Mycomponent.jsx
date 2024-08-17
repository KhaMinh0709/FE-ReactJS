
import PropTypes from 'prop-types'

const Mycomponent = props => {
  return (
    <div>
        <h1>{props.title}</h1>
        <img src ={props.src}></img>
    </div>
  )
}

Mycomponent.propTypes = {
    title: PropTypes.string.isRequired,
    src : PropTypes.string.isRequired,
}

export default Mycomponent