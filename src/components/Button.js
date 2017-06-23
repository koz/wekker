import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, TouchableHighlight} from 'react-native'

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    backgroundColor: '#62A1D4',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default function Button ({children, onPress}) {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableHighlight>
  )
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
}
