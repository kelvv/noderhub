import { combineReducers } from 'redux'
import app from './appReducer'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  app
})

export default rootReducer
