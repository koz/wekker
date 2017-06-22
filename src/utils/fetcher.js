import axios from 'axios'
import {
  Alert
} from 'react-native'

const API_KEY = 'AIzaSyAnk9dToeoLZPY67jfYfh_1nt1cGfYZGCs'

export function getFormattedAddress(lat, lng) {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`)
  .then(({data: {results}}) => {
    const {formatted_address: formattedAddress} = results[0]
    return formattedAddress
  })
  .catch(err => {
    Alert.alert(
      'Um erro ocorreu',
      JSON.stringify(err)
    )
  })
}
