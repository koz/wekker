import React from 'react'
import PropTypes from 'prop-types'
import {StyleSheet, Text, TouchableHighlight} from 'react-native'

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default function Button ({children, onPress, disabled, buttonStyle}) {
  return (
    <TouchableHighlight
      style={[
        styles.button,
        {backgroundColor: disabled ? "#8E8E8E" : "#62A1D4"},
        buttonStyle,
      ]}
      onPress={!disabled ? onPress : null}
      underlayColor="#62A1D4"
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
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.object,
}
