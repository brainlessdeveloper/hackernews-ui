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

export const tree = (comments, story) => {
  const replies = parent => ({
    ...parent,
    replies: comments.filter(com => com.parent_id === parseInt(parent.objectID, 10)).map(replies),
  })
  return comments
    .filter(com => `${com.parent_id}` === `${story.id}`)
    .map(replies)
}

export const buildIndexRefs = (route, database, amount = 30) => (
  new Promise((resolve) => {
    database
      .ref(route)
      .limitToFirst(amount)
      .on('value', indexSnapshot => (
        resolve(indexSnapshot.val().map(id => database.ref(`v0/item/${id}`))))
      )
  })
)
