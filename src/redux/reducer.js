import {SET_RADIUS, SET_DESTINATION} from './actionTypes'

const wekker = {
  settings: {
    radius: 500,
  },
}

export default function reducer(state = wekker, {type, payload}) {
  switch (type) {
    case SET_DESTINATION:
      return {
        ...state,
        destination: payload.destination,
      }
    case SET_RADIUS:
      return {
        ...state,
        settings: {
          ...state.settings,
          radius: payload.radius,
        },
      }
    default:
      return state
  }
}
