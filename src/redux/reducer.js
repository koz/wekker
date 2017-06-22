import {SET_DESTINATION} from './actionTypes'

export default function reducer(state = {}, action) {
  switch(action.type) {
    case SET_DESTINATION:
      const newState = {
        ...state,
        destination: action.destination,
      }
      return newState
    default:
      return state
  }
}
