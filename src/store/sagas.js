import * as belt from 'redux-belt'

import { fork, takeLatest, call, put } from 'redux-saga/effects'

import * as api from './api'
import { storiesActions, commentsActions } from './actions'

const INDEX_PAGE_SIZE = 30

export function* asyncStories(action) {
  try {
    const { data: ids } = yield call(api.stories, action.payload)
    const responses = yield Promise.all(ids.slice(0, INDEX_PAGE_SIZE).map(api.story))
    yield put({ type: storiesActions.FETCH_INDEX_SUCCESS, payload: responses.map(res => res.data) })
  } catch (err) {
    console.log(err)
  }
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

