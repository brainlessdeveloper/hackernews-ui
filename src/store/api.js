import axios from 'axios'

// const HN_PORTAL_BASE = 'https://news.ycombinator.com/'
const SHN_API_BASE = 'http://hn.algolia.com/api/v1/'

export const story = id => axios.get(`${SHN_API_BASE}items/${id}`)

export const stories = (params = {}) => axios.get(
  `${SHN_API_BASE}search`,
  {
    params: {
      tags: 'front_page',
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
