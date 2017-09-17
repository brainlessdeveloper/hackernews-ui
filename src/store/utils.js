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

export const dispatchLiveItems = (route, database, success, amount = 30) => {
  database.ref(route).on('value', (indexSnapshot) => {
    Promise.all(indexSnapshot.val()
      .slice(0, amount)
      .map(id => database.ref(`v0/item/${id}`))
      .map(itemRef => itemRef.once('value'))
    ).then(itemSnapshots => success(itemSnapshots.map(item => item.val())))
  })
}
