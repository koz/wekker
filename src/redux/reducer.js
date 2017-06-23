import {
  SET_RADIUS,
  SET_DESTINATION,
  SET_LOCATIONS,
  START_TRACKING,
  STOP_TRACKING,
  SET_CURRENT_POSITION,
} from './actionTypes'

const Item = title => ({
  title,
  value: null,
  opened: false
})

const InitialState = {
  locations: [
    new Item('Casa'),
    new Item('Trabalho')
  ],
  destination: null,
  settings: {
    radius: 500,
  },
  tracking: false,
}

export default function reducer(state = InitialState, {type, payload}) {
  switch(type) {
    case SET_DESTINATION:
      return {
        ...state,
        destination: payload.destination
      }
    case SET_LOCATIONS:
      return {
        ...state,
        locations: payload.locations
      }
    case SET_RADIUS:
      return {
        ...state,
        settings: {
          ...state.settings,
          radius: payload.radius
        }
      }
    case START_TRACKING:
      return {
        ...state,
        tracking: true,
      }
    case STOP_TRACKING:
      return {
        ...state,
        tracking: false,
      }
    case SET_CURRENT_POSITION:
      return {
        ...state,
        currentPosition: {
          ...payload.currentPosition
        }
      }
    default:
      return state
  }
}
