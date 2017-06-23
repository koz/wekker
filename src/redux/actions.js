import {SET_RADIUS, SET_DESTINATION} from './actionTypes'

export function setRadius (radius) {
  return {
    type: SET_RADIUS,
    payload: {radius},
  }
}

export function addDestination (lat, lng, address) {
  return {
    type: SET_DESTINATION,
    payload: {
      destination: {
        lat,
        lng,
        address,
      },
    },
  }
}
