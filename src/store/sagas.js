import * as belt from 'redux-belt'

import { fork, takeLatest, put } from 'redux-saga/effects'

import * as api from './api'
import database from './firebase'
import { buildIndexRefs } from './utils'
import { storiesActions, commentsActions } from './actions'

export function* asyncStories(action) {
  const stories = yield buildIndexRefs('v0/topstories', database, action.payload)
  yield put({
    type: storiesActions.FETCH_INDEX_SUCCESS,
    payload: stories,
  })
}

export const asyncStory = belt.simpleAsync({
  effect: id => [api.story, id],
})

export const asyncComments = belt.simpleAsync({
  effect: storyId => [api.comments, storyId],
  afterSuccess: (response, storyId) => ([
    commentsActions.buildTree({
      comments: response.data.hits,
      story: { id: storyId },
    }),
  ]),
})

export default function* sagas() {
  yield fork(takeLatest, storiesActions.FETCH_INDEX, asyncStories)
  yield fork(takeLatest, storiesActions.FETCH_SINGLE, asyncStory)
  yield fork(takeLatest, commentsActions.FETCH_INDEX, asyncComments)
}

