import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
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
        <View style={styles.button}>
          <Image
            style={styles.image}
            source={require('../../assets/address.png')}
          />
          <Text
            style={styles.text}
          >
            {
              address
              ? `${address.slice(0, 30)}...`
              : placeholder
            }
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const {width, height} = Dimensions.get('window')

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 2,
    margin: 10,
    width: width * 0.9,
    shadowOffset:{  width: 8,  height: 8,  },
    shadowColor: '#A6A6A6',
    shadowOpacity: 0.6,
  },
  button: {
    marginLeft: 20,
    padding: 10,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems: 'center',
  },
  text: {
    padding: 7,
    fontSize: 20,
  },
  image: {
    marginRight: 5,
    width: 15,
    height: 15,
  }
}

export default PickAddress;
