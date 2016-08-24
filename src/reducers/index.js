import { combineReducers } from 'redux'
import app from './appReducer'
import post from './postReducer'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  app,
  post
})

export default rootReducer
