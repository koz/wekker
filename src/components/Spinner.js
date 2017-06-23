import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {Animated, Easing} from 'react-native'

class Spinner extends Component {
  constructor (props) {
    super(props)
    this.unmounted = false
    this.state = {spinValue: new Animated.Value(0)}
  }

  componentDidMount () {
    this.spinForever()
  }

  componentWillUnmount () {
    this.unmounted = true
  }

  spinForever = () => {
    Animated.timing(this.state.spinValue, {
      toValue: 100,
      duration: 5000,
      easing: Easing.linear,
    })
    .start(event => {
      if (this.unmounted) {
        return
      }
      if (event.finished) {
        this.setState({spinValue: new Animated.Value(0)})
        this.spinForever()
      }
    })
  }

  render() {
    const {spinValue} = this.state
    const spin = spinValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '360deg'],
    })
    return (
      <Animated.Image
        style={[
          {transform: [{rotate: spin}]},
          this.props.style
        ]}
        source={this.props.source}
      />
    );
  }
}

Spinner.propTypes = {
  style: PropTypes.number.isRequired,
  source: PropTypes.number.isRequired,
}

export default Spinner
