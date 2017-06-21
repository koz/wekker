import {SET_DESTINATION} from './actionTypes'

export function addDestination(lat, lng, address) {
  return {
    type: SET_DESTINATION,
    destination: {
      lat,
      lng,
      address,
    },
  }
}
