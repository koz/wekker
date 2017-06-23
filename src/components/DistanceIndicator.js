import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
})

const DistanceIndicator = ({distance}) => {
  const {width, height} = Dimensions.get('window')
  return (
    <View style={[
      styles.container,
      {
        width: width * 0.9
      }
    ]}>
      <Text style={styles.text}>
        Faltam <Text style={[styles.text, {color: "#9986FC"}]}>{distance > 1000 ? `${distance / 1000}km` : `${distance}m`}</Text> para seu destino
      </Text>
    </View>
  )
}

DistanceIndicator.propTypes = {
  distance: PropTypes.number,
}

export default DistanceIndicator
