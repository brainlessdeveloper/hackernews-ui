import { combineReducers } from 'redux'

import { crudState, crudReducer } from './crud'
import { storiesActions, commentsActions } from './actions'

const storiesReducer = (
  state = crudState,
  action = {},
) => crudReducer(state, action, storiesActions)

const commentsReducer = (
  state = crudState,
  action = {},
) => crudReducer(state, action, commentsActions)

export default combineReducers({
  stories: storiesReducer,
  comments: commentsReducer,
})
