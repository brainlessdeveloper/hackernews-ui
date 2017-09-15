import axios from 'axios'

// const HN_PORTAL_BASE = 'https://news.ycombinator.com/'
const SHN_API_BASE = 'http://hn.algolia.com/api/v1/'
const HN_FB_BASE = 'https://hacker-news.firebaseio.com/v0/'

export const story = id => axios.get(`${SHN_API_BASE}items/${id}`)

export const stories = (params = {}) => axios.get(
  `${HN_FB_BASE}topstories.json`,
  {
    params: {
      print: 'pretty',
      ...params,
    },
  },
)

export const comments = storyId => axios.get(
  `${SHN_API_BASE}search_by_date`,
  {
    params: {
      tags: `comment${storyId ? `,story_${storyId}` : ''}`,
      hitsPerPage: 1000,
    },
  },
)
