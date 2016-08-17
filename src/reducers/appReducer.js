import { SET_SELECTED_TAB  } from '../ActionTypes'

export default function app(state = { selectedTab:"home" }, action) {
  switch (action.type) {
    case SET_SELECTED_TAB:
      return Object.assign({}, state, { selectedTab: action.selectedTab })
    default:
      return state
  }
}
