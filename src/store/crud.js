import * as belt from 'redux-belt'

export const crudReducer = belt.configureCrudReducer({
  index: action => action.payload,
  error: action => action.payload,
  single: action => action.payload,
  meta: () => null,
})

export const crudState = belt.crudState
