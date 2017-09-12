import * as belt from 'redux-belt'

export const crudReducer = belt.configureCrudReducer({
  index: action => action.payload.hits,
  error: action => action.payload,
  single: action => action.payload,
  meta: (action) => {
    const { hits, ...meta } = action.payload
    return meta
  },
})

export const crudState = belt.crudState
