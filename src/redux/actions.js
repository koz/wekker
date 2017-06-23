import {
  SET_RADIUS,
  SET_DESTINATION,
  START_TRACKING,
  STOP_TRACKING,
  SET_CURRENT_POSITION,
} from './actionTypes'

export function startTracking() {
  return {type: START_TRACKING}
}

export function stopTracking() {
  return {type: STOP_TRACKING}
}

export function setRadius (radius) {
  return {
    type: SET_RADIUS,
    payload: {radius},
  }
}

export function setCurrentPosition (lat, lng) {
  return {
    type: SET_CURRENT_POSITION,
    payload: {
      currentPosition: {
        lat,
        lng,
      },
    },
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
