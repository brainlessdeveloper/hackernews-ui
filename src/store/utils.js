import * as belt from 'redux-belt'

export const actionsNamespace = (...args) => (
  process.env.NODE_ENV !== 'production'
    ? belt.strict(belt.actions(...args))
    : belt.actions(...args)
)

export const crudActionsNamespace = (...args) => (
  process.env.NODE_ENV !== 'production'
    ? belt.strict(belt.actionsIncludingCrud(...args))
    : belt.actionsIncludingCrud(...args)
)
