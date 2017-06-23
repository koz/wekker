import { SET_RADIUS, SET_DESTINATION, SET_LOCATIONS } from './actionTypes'

export function setRadius (radius) {
  return {
    type: SET_RADIUS,
    payload: { radius }
  }
}

export function addDestination (lat, lng, address) {
  return {
    type: SET_DESTINATION,
    payload: {
      destination: {
        lat,
        lng,
        address
      }
    }
  }
}

export function setLocations(locations) {
  return {
    type: SET_LOCATIONS,
    payload: { locations }
  }
}
