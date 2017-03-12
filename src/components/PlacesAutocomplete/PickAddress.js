import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import React from 'react'

const PickAddress = ({address, handlePress, placeholder}) => {
  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        onPress={handlePress}
      >
        <Text
          style={styles.text}
        >
          {
            address
            ? `${address.slice(0, 30)}...`
            : placeholder
          }
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 2,
    margin: 10,
    padding: 10,
  },
  text: {
    fontWeight: '600'
  }
}

export default PickAddress;
