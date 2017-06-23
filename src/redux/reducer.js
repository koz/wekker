import { SET_RADIUS, SET_DESTINATION, SET_LOCATIONS } from './actionTypes'

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
    radius: 500
  }
}

export default function reducer(state = InitialState, action) {
  switch(action.type) {
    case SET_DESTINATION:
      return {
        ...state,
        destination: action.payload.destination
      }
    case SET_LOCATIONS:
      return {
        ...state,
        locations: action.payload.locations
      }
    case SET_RADIUS:
      return {
        ...state,
        settings: {
          ...state.settings,
          radius: action.payload.radius
        }
      }
    default:
      return state
  }
}
