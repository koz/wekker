import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text
} from 'react-native'

class Title extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            { this.props.text }
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFF'
  },
  wrapper: {
    borderBottomWidth: 1,
    borderColor: '#CCC',
    paddingTop: 30,
    paddingBottom: 30,
    marginLeft: 30,
    marginRight: 30
  },
  title: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold'
  }
})

export default Title
