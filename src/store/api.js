import axios from 'axios'

const SHN_API_BASE = 'http://hn.algolia.com/api/v1/'

export const story = id => axios.get(`${SHN_API_BASE}items/${id}`)

export const comments = storyId => axios.get(
  `${SHN_API_BASE}search_by_date`,
  {
    params: {
      tags: `comment${storyId ? `,story_${storyId}` : ''}`,
      hitsPerPage: 1000,
    },
  },
)
