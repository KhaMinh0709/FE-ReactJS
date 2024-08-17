
import PropTypes from 'prop-types'

const MyComponent = props => {
  return (
    <div>
        {props.children}
        <h1>{props.title}</h1>
        <img src = {props.src}>
        </img>
    </div>
  )
}

MyComponent.propTypes = {
    title : PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    children :PropTypes.node
}

export default MyComponent