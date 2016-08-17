import * as types from '../ActionTypes'

export const setSelectedTab = (name) => {
    return { type: types.SET_SELECTED_TAB, selectedTab: name }
}
