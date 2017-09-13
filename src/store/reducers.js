import update from 'immutability-helper'
import { combineReducers } from 'redux'

import { crudState, crudReducer } from './crud'
import { storiesActions, commentsActions } from './actions'
import { tree } from './utils'

const storiesReducer = (
  state = crudState,
  action = {},
) => crudReducer(state, action, storiesActions)

const commentsReducer = (
  state = {
    ...crudState,
    trees: {},
  },
  action = {},
) => {
  switch (action.type) {
    case commentsActions.BUILD_TREE: {
      return update(crudReducer(state, action, commentsActions), {
        trees: {
          $merge: {
            [action.payload.story.id]: tree(action.payload.comments, action.payload.story),
          },
        },
      })
    }
    default:
      return crudReducer(state, action, commentsActions)
  }
}

export default combineReducers({
  stories: storiesReducer,
  comments: commentsReducer,
})
