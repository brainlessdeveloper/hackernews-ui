import Firebase from 'firebase'

import { dispatchRefs } from './utils'
import { storiesActions } from './actions'

import store from './'

const config = {
  databaseURL: 'https://hacker-news.firebaseio.com',
}

const database = Firebase.initializeApp(config).database()

// This function is impure and is only meant to reduce boilerplate
const connectItems = (route, success) =>
  dispatchRefs(route, database, items => store.dispatch({
    type: success,
    payload: items,
  }))

connectItems('v0/topstories', storiesActions.FETCH_INDEX_SUCCESS)
