import { FETCH_POST_LIST , FRESH_POST_START , FRESH_POST_FINISH , FETCH_NEXT_PAGE_START , FETCH_NEXT_PAGE_FINISH} from '../ActionTypes'
import {  ListView } from 'react-native';

let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
let defaultDataSource = ds.cloneWithRows([])

export default function postReducers(state = { dataSource: defaultDataSource }, action) {
  switch (action.type) {
    case FETCH_POST_LIST:
      let ds_temp = ds.cloneWithRows(action.dataSource);
      return Object.assign({}, state, { dataSource: ds_temp , curPage: action.page });
    case FRESH_POST_START:
      return Object.assign({}, state, { refreshing: true })
    case FRESH_POST_FINISH:
      return Object.assign({}, state, { refreshing: false })
    case FETCH_NEXT_PAGE_START:
      return Object.assign({}, state, { fetchingNext: true })
    case FETCH_NEXT_PAGE_FINISH:
      return Object.assign({}, state, { fetchingNext: false })
    default:
      return state
  }
}