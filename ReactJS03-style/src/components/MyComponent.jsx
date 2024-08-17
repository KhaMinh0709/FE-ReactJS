
import PropTypes from 'prop-types'

const MyComponent = props => {
  return (
    <div   className = {props.className}>
        <h1>{props.title}</h1>
        <img 
        src ={props.src}></img>
    </div>
  )
}

MyComponent.propTypes = {
    title : PropTypes.string.isRequired,
    src : PropTypes.string.isRequired,
    className : PropTypes.string
}

export default MyComponent